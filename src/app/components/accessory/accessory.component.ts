import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

interface Accessory {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccessoryService {
  accessoryList: Accessory[] = [
    { name: "Phone Case" },
    { name: "Screen Protector" },
    { name: "Headphones" }
  ];
  newAccessory: string = '';

  addAccessory() {
    const newAccessory: Accessory = { name: this.newAccessory };
    this.accessoryList.push(newAccessory);
    this.newAccessory = '';
  }

  deleteAccessory(index: number) {
    this.accessoryList.splice(index, 1);
  }
}

@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.component.html',
  styleUrl: './accessory.component.css'
})
export class AccessoryComponent {
  accessoryList: Accessory[] = [
    { name: "Phone Case" },
    { name: "Screen Protector" },
    { name: "Headphones" }
  ];
  newAccessory: string = '';

  addAccessory() {
    const newAccessory: Accessory = { name: this.newAccessory };
    this.accessoryList.push(newAccessory);
    this.newAccessory = '';
  }

  deleteAccessory(index: number) {
    this.accessoryList.splice(index, 1);
  }

}
