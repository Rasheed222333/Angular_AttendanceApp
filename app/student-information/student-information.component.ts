import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {
  label:string="Student Card";

  studentsInfo=[
    {
      name:"Rasheed",
      rollNo:"104",
      department:"ECE",
      institute:"MJCET",
      location:"hyderabad"
    },
    {
      name:"Rizwan",
      rollNo:"105",
      department:"IT",
      institute:"MJCET",
      location:"hyderabad"
    },
    {
      name:"Sandeep",
      rollNo:"106",
      department:"EEE",
      institute:"VCE",
      location:"Warangal"
    },
    {
      name:"Sathvik",
      rollNo:"107",
      department:"CSE",
      institute:"VCE",
      location:"hyderabad"
    },
    {
      name:"Manoj",
      rollNo:"108",
      department:"IT",
      institute:"VCE",
      location:"Siddipet"
    },
    {
      name:"Sumanth",
      rollNo:"109",
      department:"IT",
      institute:"VCE",
      location:"Karimnagar"
    }
  ]

  constructor(public studentServiceService:StudentServiceService){ }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  present(event: any){
    console.log(event)
    this.studentServiceService.setWhoIsPresent(event)
  }

}
