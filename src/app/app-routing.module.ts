import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './modules/home/home-page/home-page.component';
import {AboutPageComponent} from './modules/about/about-page/about-page.component';
import {NoPageComponent} from './shared/components/no-page/no-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
