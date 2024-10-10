import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-vagetable',
  templateUrl: './vagetable.component.html',
  styleUrl: './vagetable.component.css'
})
export class VagetableComponent {
  vegetableList: string[] = ["Carrot", "Broccoli", "Tomato"];
  item: string = '';

  addItems() {
    this.vegetableList.push(this.item);
  }

  deleteVegetable(index: number) {
    this.vegetableList.splice(index, 1);
  }
}
