import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productList: string[] = ["Laptop", "Smartphone", "Headphones"];
  item: string = '';

  addItems() {
    this.productList.push(this.item);
  }

  deleteProduct(index: number) {
    this.productList.splice(index, 1);
  }
}
