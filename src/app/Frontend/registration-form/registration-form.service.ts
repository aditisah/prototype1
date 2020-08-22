import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentDetails } from './registration-form.model';
@Injectable({
  providedIn: 'root'
})
export class RegistrationFormService {
   URL = '/api/v1/registration';
  constructor(private http: HttpClient) { }
  // FillRegistrationForm(fillDetail){
  //   return this.http.post('')
  // }
  fillRegistrationForm(college: string,
                       name: string,
                       batch: string,
                       branch: string){
    const submitDetails: StudentDetails = { college,
                                           name,
                                           batch,
                                          branch };

    this.http.post(this.URL, submitDetails)
    .subscribe(responseData => {
      console.log(responseData);
    });
}
showStudentDetails(){
  return this.http.get(this.URL)
 .pipe(
   map(responseData => {
     const studentDetailsArray: StudentDetails[] = [];
     for (const key in responseData){
       if (responseData.hasOwnProperty(key)){
         studentDetailsArray.push({...responseData[key], id: key});

       }
     }
     return studentDetailsArray;
   })
 );

}
countStudentsInEveryCollege(){
  return this.showStudentDetails();
}
}
