import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test desc', 'https://img.delo-vcusa.ru/2017/05/Blyuda-iz-molodoy-kartoshki-TOP-6-retseptov.jpg'),
    new Recipe('Test recipe 2', 'Test desc 2', 'https://img.delo-vcusa.ru/2017/05/Blyuda-iz-molodoy-kartoshki-TOP-6-retseptov.jpg')
  ];
  
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
