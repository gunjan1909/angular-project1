import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
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

  getRecipes() {
    // return the copy of this array not the reference to original array so cant access this from outside
    return this.recipes.slice();
  }
}
