import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() title: string;
  @Input() srcImage: string;
  @Input() altImage: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
