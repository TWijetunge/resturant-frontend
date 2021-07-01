import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';            //when we import a file from a folder, we use ../ in order to access the folder first.


const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Uthappizza',
    image: 'assets/images/images/uthappizza.png',
    category: 'manins',
    featured: true,
    label: 'hot',
    price: '4.99',
    description:'A unique combination of indian Uthappam'
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image: 'assets/images/images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: '',
    price: '1.99',
    description:'Deep fried Zucchini coated with mildly sp'
  },
  {id: '2',
  name: 'Vadonut',
  image: 'assets/images/images/vadonut.png',
  category: 'appetizer',
  featured: false,
  label: 'New',
  price: '1.99',
  description:'A quintessential ConFusion experience'
},
{
  id: '3',
  name: 'ElaiCheese Cake',
  image: 'assets/images/images/elaicheesecake.png',
  category: 'dessert',
  featured: false,
  label: '',
  price: '2.99',
  description:'A delectable, semi-sweet New York Style '
}
]; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  //selectedDish: Dish = DISHES[0];

  constructor() { }

  ngOnInit(): void {
  }

}
