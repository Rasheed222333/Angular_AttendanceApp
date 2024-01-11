import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { StudentServiceService } from './student-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  title = 'AngularApp1';
  attendanceApplication="Attendance Application";
  dashboardDetails:any[]=[];
  studentSubscription:Subscription;
  
  constructor(public studentServiceService:StudentServiceService){
    console.log("constructor");
    this.studentSubscription=this.studentServiceService.getStudentsAttendanceDetails().subscribe(data=>{
      console.log('getStudentsAttendanceDetails',data);  
      this.dashboardDetails.push(data);   
    })
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");   
  }

  ngOnInit(): void {
    console.log("ngonInit");  
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");  
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");  
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked"); 
  }

  ngOnDestroy(): void {
    if(this.studentSubscription){
      this.studentSubscription.unsubscribe();
    }
    
  }

  
}
