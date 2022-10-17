import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularudyComponent } from './angularudy/angularudy.component';
import { SuperCompoComponent } from './super-compo/super-compo.component';
import { SuperCompo2Component } from './super-compo2/super-compo2.component';
import { SuperCompo3Component } from './super-compo3/super-compo3.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AngularudyComponent,
    SuperCompoComponent,
    SuperCompo2Component,
    SuperCompo3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
