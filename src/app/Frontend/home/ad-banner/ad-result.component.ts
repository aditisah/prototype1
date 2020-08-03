import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
     <h4>{{data.title}}</h4>
 </div>
  `
})
export class AdResultComponent implements AdComponent {
  @Input() data: any;

}
