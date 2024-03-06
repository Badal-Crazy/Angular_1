import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import {ShopperTemplateComponent} from './app.component'

@NgModule({
  declarations: [
    ShopperTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [ShopperTemplateComponent]
})
export class AppModule { }
