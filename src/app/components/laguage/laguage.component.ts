import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-laguage',
  templateUrl: './laguage.component.html',
  styleUrl: './laguage.component.css'
})
export class LaguageComponent {
  languageList: string[] = ["English", "Spanish", "French"];
  item: string = '';

  addItems() {
    this.languageList.push(this.item);
  }

  deleteLanguage(index: number) {
    this.languageList.splice(index, 1);
  }
}
