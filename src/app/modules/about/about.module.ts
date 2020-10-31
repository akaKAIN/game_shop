import {NgModule} from '@angular/core';
import {AboutPageComponent} from './about-page/about-page.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    SharedModule
  ]
})
export class AboutModule {
}
