import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';

@Component({
  selector: 'app-events-listing',
  templateUrl: './events-listing.component.html',
  styleUrls: ['./events-listing.component.scss']
})
export class EventsListingComponent implements OnInit {
  eventList: any;
  eventListCount: any;
  loader: Boolean = true;
  constructor(
    private siteSer: SiteService
  ) {
    this.eventListCount = 0;
  }

  ngOnInit() {
    this.siteSer.getEventAll().subscribe(retData => {
      const newData: any = retData.data;
      this.eventList = newData.list;
      this.eventListCount = this.eventList.length;
      this.loader = false;
      console.log(retData);
    })
  }

  /**
   * truncate
   */
  public truncate(str = '', counter = 0) {
    if (str != '' && str != null) {
      return this.siteSer.truncateStr(str, counter);
    } else {
      return '';
    }
  }

  /**
   * checkCompleted
   */
  public checkCompleted(event_end_date_time) {
    if (event_end_date_time) {
      let today = new Date();
      let eventData = new Date(event_end_date_time);
      if (eventData < today) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}
