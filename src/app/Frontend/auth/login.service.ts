import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './login.model';
import { from, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL = 'http://localhost:3000/api/v1';
  user = new Subject <User>();
  constructor(private http: HttpClient, private router: Router) { }
  login(email: string, password: string){
    return this.http.post<AuthResponseData>(`api/v1/users/login`, {
      email: email,
      password: password,
      returnSecureToken: true
    }
  )
  .pipe(
    // catchError(this.handleError),
    tap(responseData => {
    //console.log(responseData);
    this.handleAuthentication(
      responseData.email,
      responseData.localId,
      responseData.idToken,
      +responseData.expiresIn
    );
    })
  );
  }
  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }
  // handleAuthentication(email: any, localId: any, idToken: any, arg3: number) {
  //   throw new Error("Method not implemented.");
  // }
  // handleError(handleError: any): import("rxjs").OperatorFunction<Object, any> {
  //   throw new Error("Method not implemented.");
  // }
  // private handleError(errorRes: HttpErrorResponse) {
  //   let errorMessage = 'An unknown error occurred!';
  //   if (!errorRes.error || !errorRes.error.error) {
  //     return throwError(errorMessage);
  //   }
  //   switch (errorRes.error.error.message) {
  //     case 'EMAIL_EXISTS':
  //       errorMessage = 'This email exists already';
  //       break;
  //     case 'EMAIL_NOT_FOUND':
  //       errorMessage = 'This email does not exist.';
  //       break;
  //     case 'INVALID_PASSWORD':
  //       errorMessage = 'This password is not correct.';
  //       break;
  //   }
  //   return throwError(errorMessage);
  // }
  logout(){
    this.user.next(null);
    this.router.navigate(['/login']);
  }
}
