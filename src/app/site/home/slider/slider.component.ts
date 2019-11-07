import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
declare const $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  list: any;
  constructor(
    public siteSer: SiteService
  ) { }

  ngOnInit() {
    this.siteSer.getEventHomeSlider().subscribe(retData => {
      this.list = retData.data;
      // console.log(this.list);
    })
  }

  /**
   * truncate
   */
  public truncate(str = '', counter = 0) {
    return this.siteSer.truncateStr(str, counter);
  }

}
