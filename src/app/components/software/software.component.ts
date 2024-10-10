import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrl: './software.component.css'
})
export class SoftwareComponent {
  softwareList = [
    { name: 'Microsoft Word', version: '2021' },
    { name: 'Adobe Photoshop', version: 'CC 2022' },
    { name: 'Google Chrome', version: '100' }
  ];

  item: string = '';

  addItems() {
    // Add a new software item to the list
    if (this.item.trim() !== '') {
      this.softwareList.push({ name: this.item, version: '' });
      this.item = ''; // Clear the input field
    }
  }

  deleteProduct(index: number) {
    this.softwareList.splice(index, 1);
  }
}
