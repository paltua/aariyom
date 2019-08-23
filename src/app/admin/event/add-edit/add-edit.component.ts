import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
  animations: [routerTransition()]
})
export class AddEditComponent implements OnInit {

  public editor = ClassicEditor;
  public editorData = '';
  defaultTime = { hour: 13, minute: 30 };
  meridianTime = { hour: 13, minute: 30 };
  meridian = true;

  SecondsTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  seconds = true;

  customTime: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

  constructor() {
  }

  ngOnInit() {
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }



}
