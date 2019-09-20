import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbTimeStruct, NgbDatepickerConfig, NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/_service';
import { EventService } from './../../../_service/event.service';
import { Router } from '@angular/router';



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
	pageTitle: string;
	pageAction: string;
	addEditForm: any;
	submitted = false;
	countryList: any;
	stateList: any;
	cityList: any;
	programList: any;
	status: any;
	msg: any;

	constructor(
		private fb: FormBuilder,
		private config: NgbDatepickerConfig,
		private calendar: NgbCalendar,
		private commonSer: CommonService,
		private eventSer: EventService,
		private router: Router,
	) {
		this.pageTitle = 'Event';
		this.pageAction = 'Add';
		this.addEditForm = this.fb.group({
			event_title: ['', Validators.required],
			event_long_desc: ['', Validators.required],
			event_start_date: ['', Validators.required],
			event_end_date: ['', Validators.required],
			event_start_time: ['', Validators.required],
			event_end_time: ['', Validators.required],
			event_about: [''],
			event_objectives: [''],
			programs: ['', Validators.required],
			country_id: ['', Validators.required],
			region_id: ['', Validators.required],
			city_id: [''],
			address: ['', Validators.required],
			pin: ['', Validators.required],
			event_created_by: [1],
		});
	}

	ngOnInit() {
		this.getCountryList();
		this.getPrograms();
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

	get f(): string {
		return this.addEditForm.controls;
	}

	public formSave() {
		this.submitted = true;
		console.log(this.addEditForm.value);
		if (this.addEditForm.invalid) {
			this.eventSer.add(this.addEditForm.value).subscribe(retData => {
				if (retData.status === 'success') {
					localStorage.setItem('status', retData.status);
					localStorage.setItem('msg', retData.message);
					this.router.navigate(['/admin/events/listing']);
				} else {
					this.status = retData.status;
					this.msg = retData.message;
					console.log(retData.data);
				}
			})
		}
	}

	/**
	 * getPrograms
	 */
	public getPrograms() {
		this.commonSer.getPrograms().subscribe(retData => {
			this.programList = retData.data;
		});
	}

	/**
	 * getCountryList
	 */
	public getCountryList() {
		this.commonSer.getCountry().subscribe(retData => {
			this.countryList = retData.data;
		});
	}

	/**
	 * updateStateList
	 */
	public updateStateList(event) {
		// console.log(event.target.value);
		if (event.target.value !== '') {
			let countryId = event.target.value;
			this.commonSer.getState(countryId).subscribe(retData => {
				this.stateList = retData.data;
			});
		}
	}

	/**
	 * updateCityList
	 */
	public updateCityList(event) {
		// console.log(event.target.value);
		if (event.target.value !== '') {
			let regionId = event.target.value;
			this.commonSer.getCity(regionId).subscribe(retData => {
				this.cityList = retData.data;
			});
		}
	}



}
