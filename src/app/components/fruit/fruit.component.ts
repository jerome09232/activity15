import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css'
})
export class FruitComponent {
  fruitList: string[] = ["Apple", "Banana", "Orange"];
  item: string = '';

  addItems() {
    this.fruitList.push(this.item);
  }

  deleteFruit(index: number) {
    this.fruitList.splice(index, 1);
  }
}
