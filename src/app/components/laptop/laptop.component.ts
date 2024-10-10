import { Component } from '@angular/core';
interface Laptop {
  model: string;
}import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.css'
})
export class LaptopComponent {
  laptopList: Laptop[] = [
    { model: "MacBook Pro 16" },
    { model: "Dell XPS 13" },
    { model: "Lenovo ThinkPad X1 Carbon" }
  ];
  newLaptop: string = '';

  addLaptop() {
    const newLaptop: Laptop = { model: this.newLaptop };
    this.laptopList.push(newLaptop);
    this.newLaptop = '';
  }

  deleteLaptop(index: number) {
    this.laptopList.splice(index, 1);
  }

}
