import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    BrowserAnimationsModule,
  ]
})
export class MaterialsModule {
}
