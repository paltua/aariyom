import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
  animations: [routerTransition()]
})
export class AddEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
