import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
declare const $: any;
@Component({
  selector: 'app-about-functional',
  templateUrl: './about-functional.component.html',
  styleUrls: ['./about-functional.component.scss']
})
export class AboutFunctionalComponent implements OnInit {
  list: any;
  constructor(
    public siteSer: SiteService
  ) { }

  ngOnInit() {
    this.list = [];
    this.getData();
    setTimeout(() => {
      this.setCarousel();
    }, 1000);

  }

  /**
   * setCarousel
   */
  public setCarousel() {
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

  /**
   * getData
   */
  public getData() {
    this.siteSer.getFunctionalUnitHome().subscribe(retData => {
      this.list = retData.data;
      // this.setCarousel();
    })
  }

  /**
   * truncate
   */
  public truncate(str = '', counter = 0) {
    return this.siteSer.truncateStr(str, counter);
  }

}
