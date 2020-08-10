import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Ad } from './ad.model';
import { from } from 'rxjs';
import { AdRegistrationComponent } from './ad-registration.component';
import { AdResultComponent } from './ad-result.component';
//import { AdResultComponent } from './ad-result.component';
//import { AdRegistrationComponent } from './ad-registration.component';
@Injectable()
export class AdService {

  URL = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient, private router: Router) { }
showAds(){
  return this.http.get('/ads')
  .pipe(
    map(responseData => {
      const ads: Ad[] = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)){
       ads.push({...responseData[key], id: key});
      //  for(let i=0;i=ads.length;i++){
      //     if(ads[i].component===AdRegistrationComponent){
      //       return {AdRegistrationComponent,ads};
      //     }
      //     else{
      //       return {AdResultComponent,ads};
      //     }
        //}
        }
      }
return ads;
//       return [new Ad(AdRegistrationComponent,ads=>{
// this.title = ads.title;
// this.instruction = ads.instruction;
//       }),
//              new Ad(AdResultComponent,ads=>{
// this.result = ads.result;
//              })
//             ]
    })
  )
}
getComponent(component){
  if(component==="AdRegistrationComponent"){
    return AdRegistrationComponent;
  }
  else{
    return AdResultComponent;
  }
}
}
