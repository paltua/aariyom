import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-about-functional',
  templateUrl: './about-functional.component.html',
  styleUrls: ['./about-functional.component.scss']
})
export class AboutFunctionalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      items:2,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:2
          }
      }
  })
  }

}
