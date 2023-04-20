import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent {
  @Output() recipeSelectedItem = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test desc', 'https://img.delo-vcusa.ru/2017/05/Blyuda-iz-molodoy-kartoshki-TOP-6-retseptov.jpg'),
    new Recipe('Test recipe 2', 'Test desc 2', 'https://img.delo-vcusa.ru/2017/05/Blyuda-iz-molodoy-kartoshki-TOP-6-retseptov.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedItem.emit(recipe);
  }
}
