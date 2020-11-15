import {Component} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private meta: Meta) {
    this.meta.addTag({name: 'application', content: 'RealMeat site'});
    this.meta.addTag({name: 'author', content: 'KolbasAnna'});
    this.meta.addTag({name: 'image', content: './assets/img/special/snack_meat_meta-card.webp'});
    this.meta.addTag({name: 'description', content: 'Мета описание сайта.'});
  }
}
