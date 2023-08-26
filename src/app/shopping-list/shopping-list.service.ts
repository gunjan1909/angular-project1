import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Banana', 12),
  ];

  // just return the ingredients array's copy
  getIngredients() {
    // return the copy not the reference so cant access the original array
    return this.ingredients.slice();
  }

  // add a single ingredient from shopping-edit component
  addIngredient(name: string, amount: number) {
    //check if name amount is entered or not
    if (name == '' || amount == 0) {
      alert('Please enter the name and amount of ingredient');
    } else {
      this.ingredients.push(new Ingredient(name, amount));
      this.ingredientsChanged.emit(this.ingredients.slice());
    }
  }

  // add ingredients from recipe detail's add to shopping list button
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
