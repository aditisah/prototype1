import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @ViewChild('login') auth: NgForm;
  error: string = null;
  isLoading = false;
  isValid = true;
  constructor(private loginServ: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
onLogin(auth: NgForm){
  const value = auth.value;
  this.isLoading = true;
 this.loginServ.login(value.email,value.password)
 .subscribe(resData=>{
   //console.log(resData);
   //console.log("login happened");
   this.isLoading = false;
   this.isValid = true;
   this.router.navigate(['/home']);
    },
 errorMessage => {
  console.log(errorMessage);
  this.error = errorMessage;
  this.isLoading = false;
  this.isValid = false;
  }
 )
 auth.reset();
}
}
