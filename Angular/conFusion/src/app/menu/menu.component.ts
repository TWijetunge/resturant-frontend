import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';            //when we import a file from a folder, we use ../ in order to access the folder first.
import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //dishes: Dish[] = DISHES;

 selectedDish: Dish = new Dish;
  dishes: Dish[] = [];  //initializing "dishes"



  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes=this.dishService.getDishes();
  }

  onSelect(dish:Dish){
    this.selectedDish=dish;
  }

  

}
