import {Component, OnInit} from '@angular/core';
import {CatalogCategory} from '../../../../models/base';
import {ProductService} from '../../../../services/product.service';

@Component({
  selector: 'app-catalog-bar',
  templateUrl: './catalog-bar.component.html',
  styleUrls: ['./catalog-bar.component.scss']
})
export class CatalogBarComponent implements OnInit {
  catalog: CatalogCategory[];
  constructor(private product: ProductService) {
    this.catalog = product.catalog;
  }

  ngOnInit(): void {
  }

}
