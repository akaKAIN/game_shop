import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './modules/home/home.module';
import {ContactModule} from './modules/contact/contact.module';
import {MaterialsModule} from './modules/materials/materials.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    ContactModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
