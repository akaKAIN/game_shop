import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../../../../services/product.service';
import {CatalogItem} from '../../../../models/base';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  item: CatalogItem;

  constructor(private route: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('detail params: ', params);
    });
  }

}
