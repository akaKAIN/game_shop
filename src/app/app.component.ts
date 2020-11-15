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
    this.meta.addTag({name: 'application', content: 'site:RealMeat'});
    this.meta.addTag({name: 'author', content: 'akaKAIN'});
    this.meta.addTag({name: 'image', content: 'https://real-meat.herokuapp.com/assets/img/special/snack_meat_meta-card.webp'});
    this.meta.addTag({name: 'description', content: ''});

    this.meta.addTags([
      {property: 'og:title', content: 'Мясные вкусности на заказ.'},
      {property: 'og:url', content: 'https://real-meat.herokuapp.com/home'},
      {property: 'og:image', content: 'https://real-meat.herokuapp.com/assets/img/special/snack_meat_meta-card.webp'},
      {property: 'og:local', content: 'ru_RU'},
      {property: 'og:description', content: 'У нас индивидуальный подход к каждому заказу.'},
      {property: 'og:site_name', content: 'RealMeat'},
    ]);
  }
}
