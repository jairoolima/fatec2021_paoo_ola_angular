import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {OlaAngular2Component} from './ola-angular2/ola-angular2.component';
import { OlaAngularCliComponent } from './ola-angular-cli/ola-angular-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    OlaAngular2Component,
    OlaAngularCliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
