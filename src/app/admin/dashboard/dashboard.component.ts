import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CommonService } from 'src/app/_service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  details: any = [];
  constructor(
    private commonSer: CommonService,
  ) {
    this.details[0] = { count: 0, url: '' };
    this.details[1] = { count: 0, url: '' };
    this.details[2] = { count: 0, url: '' };
  }

  ngOnInit() {
    this.commonSer.getDashboardDetails().subscribe(retData => {
      this.details = retData.data;
      // console.log(this.details);
    });
  }

}
