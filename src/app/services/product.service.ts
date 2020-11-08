import {CatalogCategory, CatalogItem} from '../models/base';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productList: CatalogItem[] = [];
  public catalog: CatalogCategory[] = [
    {
      title: 'category1',
      items: [
        {id: 1, title: 'Item1 from cat1', description: 'Description item 1', link: 'routeItem1', slag: 'slag-item1'},
        {id: 2, title: 'Item2 from cat1', description: 'Description item 2', link: 'routeItem2', slag: 'slag-item2'},
        {id: 3, title: 'Item3 from cat1', description: 'Description item 3', link: 'routeItem3', slag: 'slag-item3'},
        {id: 4, title: 'Item4 from cat1', description: 'Description item 4', link: 'routeItem4', slag: 'slag-item4'},
      ]
    },
    {
      title: 'category2',
      items: [
        {id: 1, title: 'Item1 from cat2', description: 'Description item 1', link: 'routeItem1', slag: 'slag-item1'},
        {id: 2, title: 'Item2 from cat2', description: 'Description item 2', link: 'routeItem2', slag: 'slag-item2'},
        {id: 3, title: 'Item3 from cat2', description: 'Description item 3', link: 'routeItem3', slag: 'slag-item3'},
        {id: 4, title: 'Item4 from cat2', description: 'Description item 4', link: 'routeItem4', slag: 'slag-item4'},
      ]
    },
  ];

  constructor() {
    this.productList = this._getProductList();
  }

  private _getProductList(): CatalogItem[] {
    let productList: CatalogItem[] = [];
    this.catalog.forEach(category => {
      console.log('Category: ', category);
      productList = productList.concat(category.items);
    });
    console.log('service concat result: ', productList);
    return productList;
  }

  public filterByNameMatch(subName: string): CatalogItem[] {
    console.log('TODO: search func. Searching:', subName);
    return [];
  }
}
