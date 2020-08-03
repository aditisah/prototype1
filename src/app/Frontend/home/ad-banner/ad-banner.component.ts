import { Component, OnInit, Input, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
//import { AdDirective } from 'src/app/ad.directive';
//import { AddService } from './add.service';
import { Ad } from './ad.model';
import { from } from 'rxjs';
import { AdService } from './ad.service';
import { AdDirective } from './../../../ad.directive';
import { AdComponent } from './ad.component';
//import { AdRegistrationComponent } from './ad-registration.component';
//import { AdResultComponent } from './ad-result.component';
//import { AdComponent } from './ad.component';
//import { AdRegistrationComponent } from './ad-registration.component';
//import { HomeComponent } from './../../home/home.component';
@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: Ad[];


  currentIndex = -1;
   //adItem: Ad[]=[];

 @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
 interval: any;
  //componentFactoryResolver: any;
  constructor(private adServ: AdService, private componentFactoryResolver: ComponentFactoryResolver ) { }

  ngOnInit(): void {
    // this.loadComponent();
     this.getAds();
  }
   ngOnDestroy() {
     clearInterval(this.interval);
   }
  loadComponent(){

this.currentIndex = (this.currentIndex + 1) % this.ads.length;
 //this.ad.push(this.ads[this.currentIndex]);
  const ad = this.ads[this.currentIndex];
 //     //return adItem;
   let component = this.adServ.getComponent(ad.component);
       let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

       const viewContainerRef = this.adHost.viewContainerRef;
       viewContainerRef.clear();

       const componentRef = viewContainerRef.createComponent(componentFactory);

     (<AdComponent>componentRef.instance).data = ad;
// console.log((<AdComponent>componentRef.instance).data );

  }
 getAds(){
   this.interval = setInterval(() => {
     this.loadComponent();
   }, 3000);
 }

}
