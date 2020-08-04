import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { RegistrationFormService } from './registration-form.service';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { StudentDetails } from './registration-form.model';
import { MatDialog } from '@angular/material/dialog';
//import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  providers: [RegistrationFormService],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationFormComponent implements OnInit {
 //const data = [];
 @ViewChild('submitData') registrationForm: NgForm;
//  form = {
//   college : '',
//   name : '',
//   batch : '',
//   branch : ''
//  };
Issubmit = false;

  constructor( private RegistrationFormServ: RegistrationFormService ) { }

  ngOnInit(): void {
  }
 onFillRegistrationForm(registrationForm: NgForm){
  //  this.form.college = this.registrationForm.value.college;
  //  this.form.name = registrationForm.value.name;
  //  this.form.batch = registrationForm.value.batch;
  //  this.form.branch = registrationForm.value.branch;
  //  this.RegistrationFormServ.fillRegistrationForm(this.form.college, this.form.name, this.form.branch, this.form.batch);
  this.Issubmit = true;
  const value = registrationForm.value;
  this.RegistrationFormServ.fillRegistrationForm(value.college, value.name, value.batch, value.branch);
 }
//  openDialog() {
//   this.dialog.open(DialogElementsExampleDialog);
// }
}
// @Component({
//   selector: 'dialog-elements-example-dialog',
//   templateUrl: 'registration-alert.html',
// })
// export class DialogElementsExampleDialog {}
