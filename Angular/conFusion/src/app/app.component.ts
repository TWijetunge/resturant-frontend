import { Component } from '@angular/core';     //import 'component' class from @angular/core library......................

@Component({                                  //a decorator called Component
  selector: 'app-root',                       // this property specifies where the view corresponding to this component should be desplayed to
  templateUrl: './app.component.html',        //specifies a template for view corresponding to this component
  styleUrls: ['./app.component.scss']         //this file contains css
})
export class AppComponent {
  title = 'conFusion';                       // a specific variable
}
