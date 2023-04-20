import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less']
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  
  onRecipeSelected(data: Recipe) {
    this.selectedRecipe = data;
  }
}
