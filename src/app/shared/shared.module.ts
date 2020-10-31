import {NgModule} from '@angular/core';
import {HeaderBlockComponent} from './components/header-block/header-block.component';
import {SimpleContactComponent} from './components/simple-contact/simple-contact.component';
import {NoPageComponent} from './components/no-page/no-page.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HeaderBlockComponent,
    SimpleContactComponent,
    NoPageComponent,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    HeaderBlockComponent,
    SimpleContactComponent,
    NoPageComponent
  ]
})

export class SharedModule {
}
