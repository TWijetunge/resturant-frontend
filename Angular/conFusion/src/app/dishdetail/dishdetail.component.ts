import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
//import { DISHES} from '../shared/dishes';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @Input()                           // @Input()  gives a child component a way to communicate with its parent component
  dish: Dish = new Dish;

  constructor() { }

  ngOnInit(): void {
  }

}
