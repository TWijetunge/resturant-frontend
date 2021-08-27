import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; //imported 
import {MatToolbarModule} from '@angular/material/toolbar';                   //imported
import {FlexLayoutModule} from '@angular/flex-layout';                        //imported
import {MatListModule} from '@angular/material/list';                         //imported
import {MatGridListModule} from '@angular/material/grid-list';                //imported
import {MatCardModule}   from '@angular/material/card';                       //imported
import {MatButtonModule}   from '@angular/material/button';                   //imported

import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component'; 
                                                          //imported

@NgModule({          //this is a decorator which is also a function and it enables us to modify javascript ; this contains some metadata as follows
  declarations: [
    AppComponent,    //all components are declared in the module
    MenuComponent,
    DishdetailComponent    // recently created new "menu" component is included in this decorator.................................
  ],
  imports: [         // all imports are declared here
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
