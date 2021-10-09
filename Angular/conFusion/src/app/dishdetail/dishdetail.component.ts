import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
//import { DISHES} from '../shared/dishes';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';




@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

 // @Input()                           // @Input()  gives a child component a way to communicate with its parent component
                                      //@Input is removed,as router parameters substituted
  dish: Dish = new Dish;

  constructor(private dishService: DishService, 
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let  id =this.route.snapshot.params['id'];
    this.dishService.getDish(id).subscribe(dish=>this.dish=dish);
  }

  goBack(): void{
   this.location.back();
  }

}
