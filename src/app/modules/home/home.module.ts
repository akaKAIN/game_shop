import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';
import {SharedModule} from '../../shared/shared.module';
import {CatalogBaseComponent} from './home-page/catalog-base/catalog-base.component';
import {CatalogBarComponent} from './home-page/catalog-bar/catalog-bar.component';
import { DetailProductComponent } from './home-page/detail-product/detail-product.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CatalogBaseComponent,
    CatalogBarComponent,
    DetailProductComponent
  ],
  imports: [
    SharedModule
  ],
  bootstrap: [HomePageComponent]
})
export class HomeModule {
}
