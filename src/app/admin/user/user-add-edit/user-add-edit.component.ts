import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss'],
  animations: [routerTransition()],
})
export class UserAddEditComponent implements OnInit {
  title: any;
  action: any;
  constructor() {
    this.title = 'User';
    this.action = 'Add';
  }

  ngOnInit() {
  }

}
