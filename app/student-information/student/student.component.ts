import { Component,EventEmitter,Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit,OnChanges {
  @Input() student: any;
  @Input() label:any;
  @Output() emitStudentAttendance = new EventEmitter()
  constructor(public studentServiceService:StudentServiceService){ }
  
  ngOnInit(): void {
    console.log("ngOnInit");   
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");   
  }

  submitName(name:any){
    this.emitStudentAttendance.emit(name);
  }

}
