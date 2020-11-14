import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {Category} from '../../../../models/base';

@Component({
  selector: 'app-catalog-bar',
  templateUrl: './catalog-bar.component.html',
  styleUrls: ['./catalog-bar.component.scss']
})
export class CatalogBarComponent implements OnInit {
  catalog: Category[];

  constructor(private product: ProductService) {
    this.catalog = product.categories;
  }

  ngOnInit(): void {
  }

}
