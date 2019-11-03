import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ContactService } from 'src/app/_service/contact.service';

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
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  animations: [routerTransition()]
})
export class ListingComponent implements OnInit {

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
    private contactSer: ContactService,
  ) {
    this.pageTitle = 'Contact Us';
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
        that.contactSer.list(dataTablesParameters).subscribe(resp => {
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
        { data: 'con_id', searchable: false, orderable: true },
        { data: 'name', searchable: true, orderable: true },
        { data: 'email', searchable: true, orderable: true },
        { data: 'mobile', searchable: true, orderable: true },
        { data: 'desccription', searchable: true, orderable: false },
      ]
    };
  }

	/**
	 * delete
	 */
  public delete(program_id = '0') {
    this.router.navigate(['/admin/events/delete/' + program_id]);
  }

}
