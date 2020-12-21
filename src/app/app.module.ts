import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './Site/about/about.component';
import { ProductComponent } from './Site/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
        AboutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
