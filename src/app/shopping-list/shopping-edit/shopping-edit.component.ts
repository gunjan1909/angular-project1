import {
  Component,
  ElementRef,
  // EventEmitter,
  //Output,
  ViewChild,
  OnInit,
} from '@angular/core';
//import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    /* this.ingredientAdded.emit(
      new Ingredient(
        this.nameInputRef?.nativeElement.value,
        this.amountInputRef?.nativeElement.value
      )
    );*/
    this.shoppingListService.addIngredient(
      this.nameInputRef?.nativeElement.value,
      this.amountInputRef?.nativeElement.value
    );
  }
}
