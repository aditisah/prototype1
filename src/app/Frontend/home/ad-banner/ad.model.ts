import { Type } from '@angular/core';

export class Ad {
  // component(component: any) {
  //   throw new Error("Method not implemented.");
  // }
constructor(public component: Type<any>, public title: string, public instruction: string, public result: string){}
}
