import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss'],
  animations: [routerTransition()],
})
export class UserListingComponent implements OnInit {
  title: any;
  action: any;
  constructor() {
    this.title = 'User';
    this.action = 'Listing';
  }

  ngOnInit() {
  }

}
