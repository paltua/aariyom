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
      // console.log(retData);
    })
  }

}
