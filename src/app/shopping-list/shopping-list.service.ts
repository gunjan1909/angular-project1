import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potatos', 20),
  ];

  getIngredients() {
    // return the copy not the reference so cant access the original array
    return this.ingredients.slice();
  }

  addIngredient(name: string, amount: number) {
    //check if name amount is entered or not
    if (name == '' || amount == 0) {
      alert('Please enter the name and amount of ingredient');
    } else {
      this.ingredients.push(new Ingredient(name, amount));
      this.ingredientsChanged.emit(this.ingredients.slice());
    }
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient.name, ingredient.amount);
    // }
    // this is not efficient as it emits the event for each ingredient added
    // so we can use spread operator to add all ingredients at once
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
