import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employeeList: string[] = ["employee1", "employee2"];
  item: string = '';

  addItems() {
    this.employeeList.push(this.item);
  }

  deleteEmployee(index: number) {
    this.employeeList.splice(index, 1);
  }
}
