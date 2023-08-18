import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800'
    ),
  ];

  constructor() {}

  onRecipeSelected(eve: Recipe) {
    // console.log(eve);
    this.recipeWasSelected.emit(eve);
  }
}
