import {Component} from '@angular/core';
import {SimpleContactItem} from '../../../models/base';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss']
})
export class HeaderBlockComponent {
  headerText = 'Hello from HEADER';
  contacts: SimpleContactItem[] = [
    {
      contactText: '+999 888 1232',
      contactIconType: 'phone'
    },
    {
      contactText: 'example@gmail.com',
      contactIconType: 'mail'
    },
  ];
}
