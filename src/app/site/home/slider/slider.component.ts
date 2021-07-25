import { Component, OnInit, Output } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
import 'lazysizes';
import { EventEmitter } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  list: [];
  loader: Boolean = true;
  listCount: Number;
  @Output() sliderLoader = new EventEmitter<Boolean>();
  constructor(
    public siteSer: SiteService
  ) { }

  ngOnInit() {
    $('.carousel').carousel({
      interval: 3000,
    })
    this.siteSer.getEventHomeSlider().subscribe(retData => {
      this.list = retData.data;
      this.listCount = this.list.length;
      this.loader = false;
      this.sliderLoader.emit(false);
    })
  }



  /**
   * truncate
   */
  public truncate(str = '', counter = 0) {
    if (str != '') {
      return this.siteSer.truncateStr(str, counter);
    } else {
      return '';
    }
  }

}
