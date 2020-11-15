import {CatalogItem, Category} from '../models/base';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public categories: Category[] = [
    {
      id: 1,
      title: 'Колбасы',
      info: 'Важно! Заказ ветчины делается минимум за 3 дня, сревилата минимум за 4 дня желаемой даты получения заказа.',
      slag: 'kolbasa'
    },
    {
      id: 2,
      title: 'Колбасы для жарки',
      info: 'Важно! Заказ ветчины делается минимум за 1 сутки до желаемой даты получения заказа.',
      slag: 'kolbasa-dlya-jarki'
    },
    {
      id: 3,
      title: 'Паштеты',
      info: 'Важно! Заказ паштетов делается минимум за 1 сутки до желаемой даты получения заказа.',
      slag: 'pashtet'
    },
    {
      id: 4,
      title: 'Холодец',
      info: 'Важно! Заказ холодца делается минимум за 1 сутки до желаемой даты получения заказа.',
      slag: 'holodec'
    },
  ];
  public productList: CatalogItem[] = [];

  public catalog: CatalogItem[] = [
    {
      id: 1,
      title: 'Паштет из свинной печени',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 3,
      price: {cost: 500, weightMin: 100, weightStep: 100}
    },
    {
      id: 2,
      title: 'Паштет из говяжей печени',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 3,
      price: {cost: 600, weightMin: 100, weightStep: 100}
    },
    {
      id: 3,
      title: 'Паштет из куриной печени',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 3,
      price: {cost: 600, weightMin: 100, weightStep: 100}
    },
    {
      id: 4,
      title: 'Паштет из куриной печени и сердечек',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 3,
      price: {cost: 800, weightMin: 100, weightStep: 100}
    },
    {
      id: 5,
      title: 'Паштет из куриной печени и сердечек обёрнутый в бекон',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 3,
      price: {cost: 1000, weightMin: 100, weightStep: 100}
    },
    {
      id: 6,
      title: 'Холодец из свинины',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 4,
      price: {cost: 400, weightMin: 100, weightStep: 100}
    },
    {
      id: 7,
      title: 'Холодец из свинины и курицы',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 4,
      price: {cost: 450, weightMin: 100, weightStep: 100}
    },
    {
      id: 8,
      title: 'Холодец из говядины',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 4,
      price: {cost: 500, weightMin: 100, weightStep: 100}
    },
    {
      id: 9,
      title: 'Сальтисон из свинной рульки и постной свинины',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 1,
      price: {cost: 800, weightMin: 500, weightStep: 200}
    },
    {
      id: 10,
      title: 'Ветчина свинная',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 3,
      categoryID: 1,
      price: {cost: 850, weightMin: 500, weightStep: 200}
    },
    {
      id: 11,
      title: 'Ветчина свино-куриная',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 3,
      categoryID: 1,
      price: {cost: 850, weightMin: 500, weightStep: 200}
    },
    {
      id: 12,
      title: 'Сервелат свинной с горчичным семенем и паприкой',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 4,
      categoryID: 1,
      price: {cost: 850, weightMin: 500, weightStep: 200}
    },
    {
      id: 13,
      title: 'Сервелат свинина-говядина',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 4,
      categoryID: 1,
      price: {cost: 950, weightMin: 500, weightStep: 200}
    },
    {
      id: 14,
      title: 'Мортаделла с фисташками',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 3,
      categoryID: 1,
      price: {cost: 950, weightMin: 500, weightStep: 200}
    },
    {
      id: 15,
      title: 'Колбаски с чесноком. черным перцем и сумахом',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 2,
      price: {cost: 450, weightMin: 1000, weightStep: 1000}
    },
    {
      id: 16,
      title: 'Колбаски с зеленью (укроп, петрушка, базилик)',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 2,
      price: {cost: 450, weightMin: 1000, weightStep: 1000}
    },
    {
      id: 16,
      title: 'Колбаски с копченой паприкой',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 2,
      price: {cost: 450, weightMin: 1000, weightStep: 1000}
    },
    {
      id: 17,
      title: 'Колбаски с вяленными томатами',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 2,
      price: {cost: 470, weightMin: 1000, weightStep: 1000}
    },
    {
      id: 18,
      title: 'Колбаски с копченым сыром',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 2,
      price: {cost: 470, weightMin: 1000, weightStep: 1000}
    },
    {
      id: 19,
      title: 'Колбаски ферментированные',
      description: 'Имеют кислинку, как сыровяленные колбасы',
      photoUrl: './assets/img/special/snack_meat_meta-card.webp',
      productionTime: 1,
      categoryID: 0,
      price: {cost: 470, weightMin: 1000, weightStep: 1000}
    }
  ];

  constructor() {
    this.productList = this._getProductList();
  }

  private _getProductList(): CatalogItem[] {
    return this.catalog;
  }

  public filterByNameMatch(subName: string): CatalogItem[] {
    console.log('TODO: search func. Searching:', subName);
    return [];
  }
}
