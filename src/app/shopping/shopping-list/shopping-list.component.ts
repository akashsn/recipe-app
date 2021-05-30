import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomotoes', 5),
    new Ingredients('Potato', 5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addIngredients(ingredient: Ingredients) {
    this.ingredient.push(ingredient);
  }

}
