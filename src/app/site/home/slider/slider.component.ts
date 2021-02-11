import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
import 'lazysizes';
declare const $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  list: [];
  loader: Boolean = true;
  constructor(
    public siteSer: SiteService
  ) { }

  ngOnInit() {
    this.siteSer.getEventHomeSlider().subscribe(retData => {
      this.list = retData.data;
      this.loader = false;
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
