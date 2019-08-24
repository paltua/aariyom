import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbTimeStruct, NgbDatepickerConfig, NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
  animations: [routerTransition()],
  providers: [NgbDatepickerConfig] // add NgbDatepickerConfig to the component providers
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
  eventForm = this.fb.group({
    event_title: ['', Validators.required],
    event_short_desc: ['', Validators.required],
    event_start_date: ['', Validators.required],
    event_end_date: ['', Validators.required],
    event_start_time: ['', Validators.required],
    event_end_time: ['', Validators.required],
    event_long_desc: [''],
  });
  constructor(
    private fb: FormBuilder,
    private config: NgbDatepickerConfig,
    private calendar: NgbCalendar
  ) {

  }

  ngOnInit() {
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  setStartDateConfig() {
    this.config.minDate = { year: 1900, month: 1, day: 1 };
    this.config.maxDate = { year: 2099, month: 12, day: 31 };

    // days that don't belong to current month are not visible
    this.config.outsideDays = 'hidden';

    // weekends are disabled
    // this.config.markDisabled = (date: NgbDate) => this.calendar.getToday(date) ==;
  }



}
