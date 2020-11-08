import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';
import {SharedModule} from '../../shared/shared.module';
import {GreetingComponent} from './home-page/greeting/greeting.component';
import {CatalogBarComponent} from './home-page/catalog-bar/catalog-bar.component';
import { DetailProductComponent } from './home-page/detail-product/detail-product.component';
import { ProductListComponent } from './home-page/product-list/product-list.component';
import {MaterialsModule} from '../materials/materials.module';

@NgModule({
  declarations: [
    HomePageComponent,
    GreetingComponent,
    CatalogBarComponent,
    DetailProductComponent,
    ProductListComponent
  ],
  imports: [
    SharedModule,
    MaterialsModule
  ],
  bootstrap: [HomePageComponent]
})
export class HomeModule {
}
