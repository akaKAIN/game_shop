import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {CatalogItem, Category} from '../../../../models/base';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: CatalogItem[];

  constructor(private product: ProductService, private route: ActivatedRoute) {
    this.products = product.productList;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.hasOwnProperty('category')) {
        const categorySlug: string = params.category;
        const activeCategory: Category = this.product.categories.find((category: Category) => category.slag === categorySlug);
        this.products = this.product.catalog.filter((prod: CatalogItem) => prod.categoryID === activeCategory.id);
      } else {
        console.log('NO QUERY');
      }
    });
  }
}
