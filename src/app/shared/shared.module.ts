import {NgModule} from '@angular/core';
import {HeaderBlockComponent} from './components/header-block/header-block.component';
import {SimpleContactComponent} from './components/simple-contact/simple-contact.component';
import {NoPageComponent} from './components/no-page/no-page.component';
import {CommonModule} from '@angular/common';
import { SmallSearchFieldComponent } from './components/small-search-field/small-search-field.component';

@NgModule({
  declarations: [
    HeaderBlockComponent,
    SimpleContactComponent,
    NoPageComponent,
    SmallSearchFieldComponent,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    HeaderBlockComponent,
    SimpleContactComponent,
    NoPageComponent,
    SmallSearchFieldComponent
  ]
})

export class SharedModule {
}
