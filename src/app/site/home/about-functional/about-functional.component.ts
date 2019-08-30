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
      items: 4,
      margin: 10,
      autoplay: true,
      nav: true,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    })
  }

}
