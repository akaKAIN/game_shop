import {Component} from '@angular/core';
import {NavMenuOption} from '../../../models/base';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  menuOptions: NavMenuOption[] = [
    {text: 'главная', link: '/home'},
    {text: 'новости', link: '/news'},
    {text: 'акции', link: '/promotion'},
    {text: 'контакты', link: '/contact-us'},
  ];
}
