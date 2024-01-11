import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  studentsPresent = new BehaviorSubject<string>("");

  constructor() { }
  getStudentsAttendanceDetails(){
    return this.studentsPresent;
  }
  setWhoIsPresent(studentName:any){
    this.studentsPresent.next(studentName)
  }
}
