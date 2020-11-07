import {CatalogCategory, CatalogItem} from '../models/base';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public searchResult: CatalogItem[] = [];
  public catalog: CatalogCategory[] = [
    {
      category: 'category1',
      items: [
        {id: 1, title: 'Item1 from cat1', description: 'Description item 1', link: 'routeItem1', slag: 'slag-item1'},
        {id: 2, title: 'Item2 from cat1', description: 'Description item 2', link: 'routeItem2', slag: 'slag-item2'},
        {id: 3, title: 'Item3 from cat1', description: 'Description item 3', link: 'routeItem3', slag: 'slag-item3'},
        {id: 4, title: 'Item4 from cat1', description: 'Description item 4', link: 'routeItem4', slag: 'slag-item4'},
      ]
    },
    {
      category: 'category2',
      items: [
        {id: 1, title: 'Item1 from cat2', description: 'Description item 1', link: 'routeItem1', slag: 'slag-item1'},
        {id: 2, title: 'Item2 from cat2', description: 'Description item 2', link: 'routeItem2', slag: 'slag-item2'},
        {id: 3, title: 'Item3 from cat2', description: 'Description item 3', link: 'routeItem3', slag: 'slag-item3'},
        {id: 4, title: 'Item4 from cat2', description: 'Description item 4', link: 'routeItem4', slag: 'slag-item4'},
      ]
    },
  ];

  public getProductBySlag(slag: string, categoryName: string): CatalogItem {
    const category: CatalogCategory = this.catalog.find((cat: CatalogCategory) => {
      return cat.category === categoryName;
    });
    return category.items.find((item: CatalogItem) => {
      return item.slag === slag;
    });
  }

  public filterByNameMatch(subName: string): CatalogItem[] {
    console.log('TODO: search func. Searching:', subName);
    return [];
  }
}
