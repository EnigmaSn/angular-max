import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.less']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() addedItem = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingName: string = this.nameInputRef.nativeElement.value;
    const amountName: number = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, amountName)
    this.addedItem.emit(newIngredient);
  }
}
