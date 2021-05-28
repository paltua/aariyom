import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { EventService } from './../../../_service/event.service';

class ListTable {
  program_id: any[];
  program_title: number;
  program_desc: number;
  is_deleted: string;
  created_by: number;
  created_date: Date;
  user_name: number;
}

@Component({
  selector: 'app-aju-listing',
  templateUrl: './aju-listing.component.html',
  styleUrls: ['./aju-listing.component.scss'],
  animations: [routerTransition()]
})
export class AjuListingComponent implements OnInit {
  pageTitle: string;
  status: any;
  msg: any;
  dtOptions: DataTables.Settings = {};
  listTables: any;
  mySubscription: any;
  listCount: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventSer: EventService,
  ) {
    this.pageTitle = 'Join us Member';
    this.status = '';
    this.msg = '';
  }

  ngOnInit() {
    this.setTempMessages();
    this.listing();
  }

  /**
   * setTempMessages
   */
  public setTempMessages() {
    // console.log(this.status, this.msg);
    if (localStorage.getItem('status') && localStorage.getItem('msg')) {
      this.status = localStorage.getItem('status');
      this.msg = localStorage.getItem('msg');
      localStorage.setItem('status', '');
      localStorage.setItem('msg', '');
    }
  }

  /**
   * tableClass
   */
  public tableClass(i) {
    return {
      'table-secondary': (i % 2 === 0),
      'table-warning': (i % 2 === 1),
    };
  }

  /**
   * listing
   */
  public listing() {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        // console.log(dataTablesParameters);
        that.eventSer.list(dataTablesParameters).subscribe(resp => {
          that.listTables = resp.data.list;
          this.listCount = resp.data.recordsFiltered;
          callback({
            recordsTotal: resp.data.recordsTotal,
            recordsFiltered: resp.data.recordsFiltered,
            data: []
          });
        });
      },
      columns: [
        { data: 'EM.event_id', searchable: false, orderable: true },
        { data: 'EM.event_title', searchable: true, orderable: true },
        { data: 'EM.event_start_date_time', searchable: true, orderable: true },
        { data: 'PRO.program_title', searchable: true, orderable: false },
        // { data: 'EM.event_end_date_time', searchable: true, orderable: true },
        { data: 'location', searchable: false, orderable: false },
      ]
    };
  }

  /**
   * delete
   */
  public delete(event_id = 0) {
    let confirmStatus: boolean = false;
    if (event_id > 0) {
      confirmStatus = confirm('Are you sure to delete this Event?');
    }
    if (confirmStatus === true) {
      this.router.navigate(['/admin/events/delete/' + event_id]);
    }
  }



  /**
   * hideEditButton
   */
  public hideEditButton(date_time = new Date()) {
    let nowDateTime = new Date();
    let eventEndDate = new Date(date_time);
    if (eventEndDate > nowDateTime) {
      return true;
    } else {
      return false;
    }
  }

}
