import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; //imported 
import {MatToolbarModule} from '@angular/material/toolbar';                   //imported
import {FlexLayoutModule} from '@angular/flex-layout';                        //imported

import { AppComponent } from './app.component';

import 'hammerjs';                                                           //imported

@NgModule({          //this is a decorator which is also a function and it enables us to modify javascript ; this contains some metadata as follows
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
