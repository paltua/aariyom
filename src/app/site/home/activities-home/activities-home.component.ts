import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
import 'lazysizes';

@Component({
  selector: 'app-activities-home',
  templateUrl: './activities-home.component.html',
  styleUrls: ['./activities-home.component.scss']
})
export class ActivitiesHomeComponent implements OnInit {
  list: any;
  loader: Boolean = true;
  constructor(
    public siteSer: SiteService
  ) { }

  ngOnInit() {
    this.list = [];
    this.getData();
  }

  /**
   * getData
   */
  public getData() {
    this.siteSer.getProgrameHome().subscribe(retData => {
      this.list = retData.data;
      this.loader = false;
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
