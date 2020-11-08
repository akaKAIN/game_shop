import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './modules/home/home-page/home-page.component';
import {NoPageComponent} from './shared/components/no-page/no-page.component';
import {ContactPageComponent} from './modules/contact/contact-page/contact-page.component';
import {GreetingComponent} from './modules/home/home-page/greeting/greeting.component';
import {ProductListComponent} from './modules/home/home-page/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'home', component: HomePageComponent, children: [
      {path: '', component: GreetingComponent},
      {path: 'catalog', component: ProductListComponent}
    ]
  },
  {path: 'contact-us', component: ContactPageComponent},
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: '**', component: NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
