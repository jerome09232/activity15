import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  studentList: string[] = ["Jerome", "Jerome2nd"];
  item: string = '';

  addItems() {
    this.studentList.push(this.item);
  }
}
