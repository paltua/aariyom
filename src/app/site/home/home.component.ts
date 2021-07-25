import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loader: Boolean;
  bannerLoader: Boolean;
  sliderLoader: Boolean;
  constructor() { }

  ngOnInit() {
    this.loader = true;
  }

  /**
   * changeBannerLoaderStatus
   */
  public changeBannerLoaderStatus(status = false) {
    this.bannerLoader = status;
    this.updateLoaderStatus();
  }

  /**
   * changeSliderLoaderStatus
   */
  public changeSliderLoaderStatus(status = false) {
    this.sliderLoader = status;
    this.updateLoaderStatus();
  }

  /**
   * updateLoaderStatus
   */
  public updateLoaderStatus() {
    if (this.bannerLoader === false && this.sliderLoader === false) {
      this.loader = false;
    }
  }

}
