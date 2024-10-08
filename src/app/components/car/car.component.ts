import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  carModelList: string[] = ["Toyota Camry", "Honda Civic", "Ford Mustang"];
  item: string = '';

  addItems() {
    this.carModelList.push(this.item);
  }

  deleteCarModel(index: number) {
    this.carModelList.splice(index, 1);
  }
}
