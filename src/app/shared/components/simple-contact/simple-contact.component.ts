import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-simple-contact',
  templateUrl: './simple-contact.component.html',
  styleUrls: ['./simple-contact.component.scss']
})
export class SimpleContactComponent {
  @Input() contactTitle: string;
  @Input() contactIconType: string;
  @Input() contactText: string;
  @Input() contactLink?: string;
}
