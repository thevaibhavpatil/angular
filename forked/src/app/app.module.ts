import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleNg6LibModule } from 'example-ng6-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleNg6LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
