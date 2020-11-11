import {Component} from '@angular/core';
import {SimpleContactItem} from '../../../models/base';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss']
})
export class HeaderBlockComponent {
  contacts: SimpleContactItem[] = [
    {
      contactTitle: 'WhatsApp',
      contactText: '+7 909 843-89-48',
      contactIconType: 'phone',
      contactLink: 'https://wa.me/79098438948'
    },
    {
      contactTitle: 'Instagram',
      contactIconType: 'mobile_screen_share',
      contactText: '@realmeat_khv',
      contactLink: 'https://instagram.com/_u/realmeat_khv'
    },
  ];
}
