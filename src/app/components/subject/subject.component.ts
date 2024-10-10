import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  subjectList: string[] = ["Mathematics", "English", "Science"];
  item: string = '';

  addItems() {
    this.subjectList.push(this.item);
  }

  deleteSubject(index: number) {
    this.subjectList.splice(index, 1);
  }
}
