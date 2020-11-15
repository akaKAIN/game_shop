import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('RealMeat | Мясные изделия на заказ');
    this.meta.addTag({name: 'application', content: 'RealMeat site'});
    this.meta.addTag({name: 'author', content: 'KolbasAnna'});
    this.meta.addTag({name: 'image', content: './assets/img/special/snack_meat_meta-card.webp'});
    this.meta.addTag({name: 'description', content: 'Мета описание сайта.'});

    this.meta.addTags([
      {property: 'og:title', content: 'Мясные вкусности на заказ.'},
      {property: 'og:url', content: 'https://real-meat.herokuapp.com/home'},
      {property: 'og:image', content: './assets/img/special/snack_meat_meta-card.webp'},
      {property: 'og:local', content: 'ru_RU'},
      {property: 'og:description', content: 'Авторская работа.'},
      {property: 'og:site_name', content: 'REAL MEAT - это индивидаульный подход.'},
    ]);
  }
}
