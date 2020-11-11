import {NgModule} from '@angular/core';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    SharedModule
  ]
})
export class ContactModule {
}
