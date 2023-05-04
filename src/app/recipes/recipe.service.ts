import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Burger', 
      'Delicious burger', 
      'https://img.delo-vcusa.ru/2017/05/Blyuda-iz-molodoy-kartoshki-TOP-6-retseptov.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2),
        new Ingredient('Onion', 0.5),
      ]),
    new Recipe(
      'Test recipe 2', 
      'Test desc 2', 
      'https://img.delo-vcusa.ru/2017/05/Blyuda-iz-molodoy-kartoshki-TOP-6-retseptov.jpg',
      [
        new Ingredient('Meat', 10),
        new Ingredient('Bread', 5),
        new Ingredient('Onion', 7),
      ]),
  ];
  
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
