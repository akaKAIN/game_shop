import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    SharedModule
  ],
  bootstrap: [HomePageComponent]
})
export class HomeModule {
}
