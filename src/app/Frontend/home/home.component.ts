import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { transition, animate, state, style, trigger, useAnimation, animation } from '@angular/animations';
import { scaleIn, scaleOut, fadeIn, fadeOut, transformIn, transformOut } from './carousel.animations';
//import { AdComponent } from './ad-banner/ad.component';
import { from } from 'rxjs';
//import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdService } from './ad-banner/ad.service';
import { Ad } from './ad-banner/ad.model';
import { AdDirective } from 'src/app/ad.directive';
//import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdRegistrationComponent } from './ad-banner/ad-registration.component';
import { AdResultComponent } from './ad-banner/ad-result.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '1300ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1300ms' }})])
    ]),
    // trigger("cardTransition",[
    //   transition("void=>*",[useAnimation(transformIn)]),
    //   transition("*=>void",[useAnimation(transformOut)])
    // ])
  ]
})
export class HomeComponent implements OnInit {
  //isHover;
  // defaultElevation = 2;
  // raisedElevation = 8;
 ads: Ad[];

interval: any;
  constructor(private adServ: AdService) { }
  show = false;
  slides = [
  {image : 'assets/kotabag.jpg'},
  {image : 'assets/nainital.jpg'},
   {image : 'assets/polytechnic-college-of-dwarahat_1469042800.jpeg'},
    {image : 'assets/tihri.jpg'}
   ];
   slide = [];
   currentSlide = 0;
  // showSlide(){

  //     // this.slide[i] = this.slides[i];
  //     for (const key in this.slides){
  //       if (this.slides.hasOwnProperty(key)){
  //         this.slide.push({...this.slides[key], id: key});

  //       }
  //     }

  // }
  // get stateName() {
  //   return this.show ? 'show' : 'hide';
  // }

  ngOnInit(): void {
    //this.showSlide();
//this.displayAds();
//this.loadComponent();

   this.adServ.showAds()
   .subscribe(adData => {
      this.ads = adData;
   });
this.autoslider();
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    //console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    //console.log("next clicked, new current slide is: ", this.currentSlide);
  }
  autoslider(){
   this.interval = setInterval(() => {
     this.onNextClick();
    }, 7000);
  }
}
