//RECIPE SERVICE

import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Samosa',
      'This is a simple samosa',
      'https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800',
      [new Ingredient('Potato', 2), new Ingredient('Flour', 10)]
    ),
    new Recipe(
      'Samosa 2',
      'This is a simple samosa 2',
      'https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800',
      [new Ingredient('Potato', 3), new Ingredient('Flour', 12)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // return the copy of this array not the reference to original array so cant access this from outside
    return this.recipes.slice();
  }

  addIngredientsToSL(ing: Ingredient[]) {
    this.slService.addIngredients(ing);
  }
}
