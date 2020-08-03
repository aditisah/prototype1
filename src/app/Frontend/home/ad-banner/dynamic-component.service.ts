import { Injectable } from '@angular/core';

import { AdResultComponent } from './ad-result.component';
import { AdRegistrationComponent } from './ad-registration.component';
@Injectable()
export class DynamicComponentService {
getComponent(component){
  if(component==="AdRegistrationComponent"){
    return AdRegistrationComponent;
  }
  else{
    return AdResultComponent;
  }
}

}
