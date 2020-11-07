import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './modules/home/home-page/home-page.component';
import {NoPageComponent} from './shared/components/no-page/no-page.component';
import {ContactPageComponent} from './modules/contact/contact-page/contact-page.component';
import {CatalogBaseComponent} from './modules/home/home-page/catalog-base/catalog-base.component';
import {DetailProductComponent} from './modules/home/home-page/detail-product/detail-product.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent, children: [
      {path: 'base', component: CatalogBaseComponent},
      {path: ':category', children: [
          {path: ':slag', component: DetailProductComponent}
        ]}
    ]},
  {path: 'contact-us', component: ContactPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
