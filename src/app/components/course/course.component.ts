import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  courseList: string[] = ["BSIT", "COMSCI", "ACOUNTANCY"];
  item: string = '';

  addItems() {
    this.courseList.push(this.item);
  }

  deleteCourse(index: number) {
    this.courseList.splice(index, 1);
  }
}
