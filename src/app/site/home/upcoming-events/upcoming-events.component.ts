import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
import 'lazysizes';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {
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
    this.siteSer.getEventHome().subscribe(retData => {
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

  /**
   * getCityStateCountryStr
   */
  public getCityStateCountryStr(city = '', region = '', country = '') {
    let retStr = '';
    let comma = ',';
    if (city !== '') {
      retStr = retStr + city;
      if (region !== '') {
        retStr = retStr + comma;
      }
    }
    if (region !== '') {
      retStr = retStr + region;
      if (country !== '') {
        retStr = retStr + comma;
      }
    }
    if (country !== '') {
      retStr = retStr + country;
    }
    return retStr;
  }

}
