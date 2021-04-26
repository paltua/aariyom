import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_service';
import 'lazysizes';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
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
  who_we_are_media: String;
  our_mission_media: String;
  who_we_are_media_type: String;
  our_mission_media_type: String;
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
      const newData: any = retData.data;
      this.galleryCount = newData.length;
      this.gallery = [];
      if (this.galleryCount > 0) {
        for (let j = 0; j < newData.length; j++) {
          const element = newData[j];
          const obj = {
            i: j,
            id: element.id,
            is_for: element.is_for,
            type: element.type,
            path: element.type == 'youtube' ? this.urlSanitize(element.path) : element.path,
            image_path: element.image_path,
            image_path_thumb: element.image_path_thumb
          }
          this.gallery.push(obj);
        }
        const result_who_we_are_media = this.gallery.find(({ is_for }) => is_for === 'who_we_are');
        const result_our_mission_media = this.gallery.find(({ is_for }) => is_for === 'our_mission');
        if (result_who_we_are_media) {
          this.who_we_are_media = result_who_we_are_media.type == 'youtube' ? result_who_we_are_media.path : result_who_we_are_media.image_path;
          this.who_we_are_media_type = result_who_we_are_media.type;
        }
        if (result_our_mission_media) {
          this.our_mission_media = result_our_mission_media.type == 'youtube' ? result_our_mission_media.path : result_our_mission_media.image_path;
          this.our_mission_media_type = result_our_mission_media.type;
        }
      }



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
  public urlSanitize(url): SafeResourceUrl {
    let newUrl: SafeResourceUrl = this.dom.bypassSecurityTrustResourceUrl(url);
    return newUrl;
  }

  /**
   * htmlSanitize
   */
  public htmlSanitize(text) {
    let newHtml: SafeHtml = this.dom.bypassSecurityTrustHtml(text);
    return newHtml;
  }



}
