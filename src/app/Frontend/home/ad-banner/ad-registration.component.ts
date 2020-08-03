import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div>
    <h4>{{data.title}}</h4>
    <mat-chip-list aria-label="Fish selection">
  <mat-chip class="alternative accent" selected>{{data.instruction}}</mat-chip>
</mat-chip-list>
</div>
`
})
export class AdRegistrationComponent implements AdComponent {
  @Input() data: any;

}
