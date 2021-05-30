import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeSelected = new EventEmitter<Recipe>();
	recipes: Recipe[] = [
		new Recipe('Test Receipe 1', 'Simple Test Description 1', 'https://source.unsplash.com/400x400/?food,recipe'),
		new Recipe('Test Receipe 2', 'Simple Test Description 2', 'https://source.unsplash.com/400x400/?food,recipe')
	];
	constructor() { 
	}

	ngOnInit(): void {
	}

	getRecipeEmitter(recipe: Recipe) {
		this.recipeSelected.emit(recipe);
	}

}
