import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { PromotionPageComponent } from './promotion-page/promotion-page.component';



@NgModule({
  declarations: [PromotionPageComponent],
  imports: [
    SharedModule
  ]
})
export class PromotionModule { }
