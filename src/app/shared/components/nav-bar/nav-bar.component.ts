import {Component} from '@angular/core';
import {NavMenuOption} from '../../../models/base';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  menuOptions: NavMenuOption[] = [
    {text: 'home', link: '/home'},
    {text: 'about', link: '/about'},
    {text: 'service', link: '/service'},
    {text: 'gallery', link: '/gallery'},
    {text: 'news', link: '/news'},
    {text: 'team', link: '/team'},
    {text: 'contact us', link: '/contact-us'},
  ];
}
