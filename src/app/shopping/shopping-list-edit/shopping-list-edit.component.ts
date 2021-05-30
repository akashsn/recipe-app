import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() inputEmitter = new EventEmitter<Ingredients>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredients() : void {
    //console.log(this.nameInputRef);
    //console.log(this.amountInputRef);
    let nameInput = this.nameInputRef.nativeElement.value;
    let amountInput = this.amountInputRef.nativeElement.value;

    console.log(nameInput);
    console.log(amountInput);
    let ingredient = new Ingredients(nameInput, amountInput);
    this.inputEmitter.emit(ingredient);

  }

}
