import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { JoinUsService } from 'src/app/_service/join-us.service';
import { MatDialog } from '@angular/material/dialog';
import { AjuReplyComponent } from '../aju-reply/aju-reply.component';

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
    private joinUsSer: JoinUsService,
    public dialog: MatDialog
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
        that.joinUsSer.list(dataTablesParameters).subscribe(resp => {
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
        { data: 'jum_id', searchable: false, orderable: true },
        { data: 'jum_name', searchable: true, orderable: true },
        { data: 'jum_email', searchable: true, orderable: true },
        { data: 'jum_phone', searchable: true, orderable: true },
        { data: 'jum_dob', searchable: true, orderable: true },
        { data: 'jum_gender', searchable: true, orderable: false },
        { data: 'jum_occupation', searchable: false, orderable: false },
        { data: 'jum_id', searchable: false, orderable: false },
      ]
    };
  }



  /**
   * openReplyDialog
   */
  public openReplyDialog() {
    const dialogRef = this.dialog.open(AjuReplyComponent, {
      height: "200px",
      data: {
        animal: 'panda'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
