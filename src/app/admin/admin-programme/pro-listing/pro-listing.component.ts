import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ProgrammeService } from './../../../_service/programme.service';
import { Observable } from 'rxjs';
import { Programme, ApiResponses } from './../../../_models';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-pro-listing',
  templateUrl: './pro-listing.component.html',
  styleUrls: ['./pro-listing.component.scss'],
  animations: [routerTransition()]
})
export class ProListingComponent implements OnInit, AfterViewInit {
  pageTitle: string;
  programme: Observable<Programme>;
  apiRes: Observable<ApiResponses>;
  displayedColumns = ['position', 'firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private programSer: ProgrammeService
  ) {
    this.pageTitle = 'Programme';
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.programSer.list().subscribe(retData => {
      console.log(retData);
    });
  }

}

export interface Element {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
  { position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
  { position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
  { position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
  { position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' }
];

