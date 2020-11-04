import {NgModule} from '@angular/core';
import {HeaderBlockComponent} from './components/header-block/header-block.component';
import {SimpleContactComponent} from './components/simple-contact/simple-contact.component';
import {NoPageComponent} from './components/no-page/no-page.component';
import {CommonModule} from '@angular/common';
import { SmallSearchFieldComponent } from './components/small-search-field/small-search-field.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import {MaterialsModule} from '../modules/materials/materials.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    HeaderBlockComponent,
    SimpleContactComponent,
    NoPageComponent,
    SmallSearchFieldComponent,
    NavBarComponent,
    MenuListComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialsModule
  ],
  exports: [
    CommonModule,
    HeaderBlockComponent,
    SimpleContactComponent,
    NoPageComponent,
    SmallSearchFieldComponent,
    NavBarComponent,
    MenuListComponent,
  ]
})

export class SharedModule {
}
