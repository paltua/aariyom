import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_service';
import 'lazysizes';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare let $: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  loader: Boolean = true;
  who_we_are: any;
  our_mission: any;
  image: any;
  gallery: any = [];
  galleryCount: Number;
  constructor(
    public commonSer: CommonService,
    private dom: DomSanitizer
  ) { }

  ngOnInit() {
    this.getGallery();
    this.getContent();
  }

  /**
   * getContent
   */
  public getContent() {
    this.commonSer.getSettings('about_us').subscribe(retData => {
      let data: any = retData.data;
      this.who_we_are = data.who_we_are;
      this.our_mission = data.our_mission;
      this.loader = false;
    })
  }

  /**
   * getGallery
   */
  public getGallery() {
    this.commonSer.getAboutUsImageYouTubeHome('about_us').subscribe(retData => {
      console.log(retData);
      this.gallery = retData.data;
      this.galleryCount = this.gallery.length;
      setTimeout(() => {
        this.setCarousel();
      }, 1000);
    })
  }

  /**
   * setCarousel
   */
  public setCarousel() {
    // console.log(this.listCount);
    $('.owl-carousel').owlCarousel({
      items: 10,
      margin: 20,
      loop: false,
      autoplay: false,
      nav: true,
      dots: false,
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
   * urlSanitize
   */
  public urlSanitize(urls) {
    // return this.safePip.transform(urls, 'resourceUrl');
    // return this.dom.bypassSecurityTrustResourceUrl(urls);
    return urls;
  }



}
