import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SimpleContactComponent} from './shared/components/simple-contact/simple-contact.component';
import {HeaderBlockComponent} from './shared/components/header-block/header-block.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleContactComponent,
    HeaderBlockComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
