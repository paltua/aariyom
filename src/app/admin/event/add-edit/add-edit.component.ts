import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbTimeStruct, NgbDatepickerConfig, NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/_service';



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

	public countries: { [key: string]: Object; }[] = [
		{ Name: 'Australia', Code: 'AU' },
		{ Name: 'Bermuda', Code: 'BM' },
		{ Name: 'Canada', Code: 'CA' },
		{ Name: 'Cameroon', Code: 'CM' },
		{ Name: 'Denmark', Code: 'DK' },
		{ Name: 'France', Code: 'FR' },
		{ Name: 'Finland', Code: 'FI' },
		{ Name: 'Germany', Code: 'DE' },
	];
	// maps the local data column to fields property
	public localFields: Object = { text: 'Name', value: 'Code' };
	// set the placeholder to MultiSelect Dropdown input element
	public localWaterMark: string = 'Select countries';

	public value: string[] = ['AU'];

	constructor(
		private fb: FormBuilder,
		private config: NgbDatepickerConfig,
		private calendar: NgbCalendar,
		private commonSer: CommonService,
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
			toppings: ['', []]
		});
	}

	ngOnInit() {
		this.commonSer.getCountry().subscribe(retData => {
			this.countryList = retData.data;
		});

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
		if (!this.addEditForm.invalid) {
			console.log(this.addEditForm.value);

		}
	}

	/**
	 * updateStateList
	 */
	public updateStateList(event) {
		console.log(event.target.value);
		if (event.target.value !== '') {
			let countryId = event.target.value;
			this.commonSer.getState(countryId).subscribe(retData => {
				this.stateList = retData.data;
			});
		}
	}



}
