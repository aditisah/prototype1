import { Component, OnInit, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { RegistrationFormService } from './../../../registration-form/registration-form.service';
import { from } from 'rxjs';
import { StudentDetails } from './../../../registration-form/registration-form.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, stagger, style, query, transition, trigger } from '@angular/animations';
import * as jsPDF from 'jspdf';
// export interface PeriodicElement {
//   college: string;
//   name: number;
//   batch: number;
//   branch: string;
// }

// const ELEMENT_DATA: StudentDetails[] = [];

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.mat-elevation-z8, mat-form-field', [
          style({opacity: 0, transform: 'translateY(100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
    // trigger('filterAnimation', [
    //   transition(':enter, * => 0, * => -1', []),
    //   transition(':increment', [
    //     query(':enter', [
    //       style({ opacity: 0, width: '0px' }),
    //       stagger(50, [
    //         animate('300ms ease-out', style({ opacity: 1, width: '*' })),
    //       ]),
    //     ], { optional: true })
    //   ]),
    //   transition(':decrement', [
    //     query(':leave', [
    //       stagger(50, [
    //         animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
    //       ]),
    //     ])
    //   ]),
    // ]),
  ]
})
export class StudentDetailsComponent implements OnInit {
  @ViewChild('data', {static: false}) dataList: ElementRef;
  @HostBinding('@pageAnimations')
  // public animatePage = true;
  displayedColumns: string[] = ['position', 'college', 'name', 'batch', 'branch'];
   ELEMENT_DATA: StudentDetails[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  isFetching = false;

  constructor(private RegistrationFormServ: RegistrationFormService) { }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.onDisplayStudentDetails();
  }



      // if (this.dataSource.paginator) {
      //   this.dataSource.paginator.firstPage();
      // }


  onDisplayStudentDetails(){
    this.isFetching =true;
     this.RegistrationFormServ.showStudentDetails()
     .subscribe(detail => {
       //this.isFetching = false;

         this.dataSource.data = detail;
         console.log(this.dataSource);
         this.isFetching = false;
});
    }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // for (let i=0;i==this.dataSource.length;i++)
    // if (filterValue.trim().toLowerCase() === this.dataSource[i].name .toString().trim().toLowerCase()){
    // return this.dataSource;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //}
    //.dataSource.filter = filterValue.trim().toLowerCase();
}
openPDF(){
let list = this.dataList.nativeElement.value;
let doc = new jsPDF('p','pt', 'a4');
doc.fromHTML(list.innerHTML,15,15);
doc.output('file:///Users/aditi/Downloads/new-students-data%20(1).pdf');
}
public downloadPDF():void {
  let list = this.dataList.nativeElement;
  let doc = new jsPDF('p','pt', 'a4');

  let handleElement = {
    '#editor':function(element, renderer){
      return true;
    }
  };
  doc.fromHTML(list.innerHTML, 15, 15, {
    'width': 200,
    'elementHandlers': handleElement
  });

  doc.save('new-students-data.pdf');
}
}
