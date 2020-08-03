import { Component, OnInit, HostBinding } from '@angular/core';
import { RegistrationFormService } from './../registration-form/registration-form.service';
import { from } from 'rxjs';
import { StudentDetails } from './../registration-form/registration-form.model';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
//import { count } from 'rxjs/operators';
@Component({
  selector: 'app-student-detail-analytics',
  templateUrl: './student-detail-analytics.component.html',
  styleUrls: ['./student-detail-analytics.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
// interface Data{
//   collegeName: String;
//   count: Number;
// }
export class StudentDetailAnalyticsComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
 detail: StudentDetails[] = [];
  college = '';
  collegeName1;
  collegeName2;
  collegeName3;
  collegeName4;
  data = [];
  temp = [];
  // data1 = 0;
  // data2 = 0;
  // data3 = 0;
  ELEMENT_DATA = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns: string[] = ['position', 'college', 'students'];
  isCollegeButtonClicked = false;
  constructor(private RegistrationFormServ: RegistrationFormService) { }
  ngOnInit(): void {
    //this.OncountStudentsInEveryCollege();
  }
 OncountStudentsInEveryCollege(){
   let data1 = 0;
   let data2 = 0;
   let data3 = 0;
   let data4 = 0;
   this.RegistrationFormServ.countStudentsInEveryCollege()
   .subscribe(detail => {
     for ( let i = 0; i <= detail.length; i++) {
      // detail = detail;
      // console.log(detail);
      this.isCollegeButtonClicked = true;
       this.college = detail[i].college;
       //this.collegeArray.push(this.college);
       //this.name = detail[i].name;
       if (this.college === 'Polytechnic Nainital'){
        this.collegeName1 = this.college;
         data1 = data1 + 1;
        // this.data = detail.map((val,index)=>{
        //   return {key: this.collegeName,value: this.data1 }
        // });
        // this.data.push({collegeName: this.college,value: this.data1});
           //  this.data1 = this.c;
         //  t = this.college.length;
         // console.log(`Students study in Poly Nainital are ${this.c}`);
       } else if (this.college === 'Polytechnic Dwarahat'){
        this.collegeName2 = this.college;
        // this.collegeName = this.college;
         data2 =data2 + 1;
        //  this.data.push( this.data2);
      //  this.data = detail.map((val,index)=>{
      // return {key: this.collegeName,value: this.data1 }
      //   });
       // this.data.push({collegeName: this.college,value: this.data1});
     } else if (this.college === 'Polytechnic Kashipur'){
      this.collegeName3 = this.college;
      // this.collegeName = this.college;
       data3 =data3 + 1;
     }
      else {
       this.collegeName4 = this.college;
        data4 = data4 + 1;
      }
        // this.data.push(this.data3);
      //  this.data = detail.map((val,index)=>{
      //     return {key: this.collegeName,value: this.data1 }
      //   });
      // this.data.push({collegeName: this.college,value: this.data1});

     //this.dataSource.data = this.data;

  this.temp.push({collegeName: this.collegeName1,value: data1},{collegeName: this.collegeName2,value: data2},{collegeName: this.collegeName3,value: data3},{collegeName: this.collegeName4,value: data4});
   this.data =this.temp.splice(detail.length*3-4,4);

    //console.log(this.data);

   }
  // this.temp.splice(0,this.detail.length);
   //this.dataSource.data.splice(0,this.dataSource.data.length);
//  this.temp.forEach(val=>{
//      return this.data = this.temp;
//      })
//    this.data.splice(0,detail.length);


//    console.log(this.data);
   });

 }

}
