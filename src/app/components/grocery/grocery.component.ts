import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {
  groceryList: string[] = ["Milk", "Eggs", "Bread", "Cheese"];
  newItem: string = '';

  addItem() {
    this.groceryList.push(this.newItem);
    this.newItem = ''; // Clear the input field
  }

  deleteItem(index: number) {
    this.groceryList.splice(index, 1);
  }
}
