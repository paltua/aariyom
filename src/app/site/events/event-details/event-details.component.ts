import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

class Details {
  address: any = '';
  city_name: any = '';
  r_name: any = '';
  c_name: any = '';
  pin: any = '';
  event_start_date_time: any = '';
  event_end_date_time: any = '';
  event_long_desc: any = '';
  event_objectives: any = '';
  event_title: any = '';
  event_about: any = '';
  program_title: any = '';
  image_path: any = '';
}
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  data: any;
  details: Observable<Details>;
  dataId: any;
  address: any = '';
  city_name: any = '';
  r_name: any = '';
  c_name: any = '';
  pin: any = '';
  event_start_date_time: any = '';
  event_end_date_time: any = '';
  event_long_desc: any = '';
  event_objectives: any = '';
  event_title: any = '';
  event_about: any = '';
  program_title: any = '';
  image_path: any = '';
  loader: Boolean = true;
  constructor(
    private siteSer: SiteService,
    private route: ActivatedRoute,
  ) {
    this.dataId = (this.route.snapshot.paramMap.get('event_id') ? this.route.snapshot.paramMap.get('event_id') : 0);
  }

  ngOnInit() {
    this.siteSer.getSingleEvent(this.dataId).subscribe(retData => {
      this.data = retData.data;
      this.setVariableValue();
      // console.log(this.data);
      this.loader = false;
    })
  }

  /**
   * setVariableValue
   */
  public setVariableValue() {
    this.address = this.data.details[0].address;
    this.city_name = this.data.details[0].city_name;
    this.r_name = this.data.details[0].r_name;
    this.c_name = this.data.details[0].c_name;
    this.pin = this.data.details[0].pin;
    this.event_start_date_time = this.data.details[0].event_start_date_time;
    this.event_end_date_time = this.data.details[0].event_end_date_time;
    this.event_long_desc = this.data.details[0].event_long_desc;
    this.event_objectives = this.data.details[0].event_objectives;
    this.event_title = this.data.details[0].event_title;
    this.event_about = this.data.details[0].event_about;
    this.program_title = this.data.details[0].program_title;
    this.image_path = this.data.details[0].image_path;
  }

}
