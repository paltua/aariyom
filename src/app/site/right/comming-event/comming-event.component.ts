import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';

@Component({
  selector: 'app-comming-event',
  templateUrl: './comming-event.component.html',
  styleUrls: ['./comming-event.component.scss']
})
export class CommingEventComponent implements OnInit {
  events: any = [];
  constructor(private siteSer: SiteService) { }

  ngOnInit() {
    this.siteSer.getUpcomingEvent().subscribe(retData => {
      // console.log(retData);
      if (retData.status === 'success') {
        let datas: any = retData.data;
        this.events = datas.list;
      }
    })
  }

}
