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
import { DishdetailComponent } from './dishdetail/dishdetail.component'; //imported 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'; 

import { DishService } from './services/dish.service';     

import { AppRoutingModule } from './app-routing/app-routing.module';

import { PromotionService } from './services/promotion.service';

@NgModule({          //this is a decorator which is also a function and it enables us to modify javascript ; this contains some metadata as follows
  declarations: [
    AppComponent,    //all components are declared in the module
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent    // recently created new "menu" component is included in this decorator.................................
  ],
  imports: [         // all imports are declared here
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [
    DishService,
    PromotionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
