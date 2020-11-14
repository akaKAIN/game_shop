import {NgModule} from '@angular/core';
import {HeaderBlockComponent} from './components/header-block/header-block.component';
import {SimpleContactComponent} from './components/simple-contact/simple-contact.component';
import {NoPageComponent} from './components/no-page/no-page.component';
import {CommonModule} from '@angular/common';
import {SmallSearchFieldComponent} from './components/small-search-field/small-search-field.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialsModule} from '../modules/materials/materials.module';
import {SearchComponent} from './components/search/search.component';
import {ModalImageComponent} from './components/modal-image/modal-image.component';
import {ModalComponent} from './components/modal/modal.component';
import {ProductCardComponent} from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    HeaderBlockComponent,
    SimpleContactComponent,
    NoPageComponent,
    SmallSearchFieldComponent,
    NavBarComponent,
    SearchComponent,
    ModalComponent,
    ModalImageComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    HeaderBlockComponent,
    SimpleContactComponent,
    NoPageComponent,
    SmallSearchFieldComponent,
    NavBarComponent,
    RouterModule,
    ModalImageComponent,
    ProductCardComponent
  ]
})

export class SharedModule {
}
