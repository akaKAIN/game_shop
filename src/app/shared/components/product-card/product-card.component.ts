import {Component, Input, OnInit} from '@angular/core';
import {PriceInfo} from '../../../models/base';

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
  @Input() price: PriceInfo;
  @Input() productionTime: number;

  constructor() { }

  ngOnInit(): void {
  }

  printWeight(weightNum: number): string {
    const weight: number = weightNum / 1000;
    if (weight < 1) {
      return `${weightNum} гр`;
    }
    return `${weight} кг`;
  }
}
