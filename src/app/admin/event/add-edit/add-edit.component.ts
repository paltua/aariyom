import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbTimeStruct, NgbDatepickerConfig, NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/_service';
import { EventService } from './../../../_service/event.service';
import { Router, ActivatedRoute } from '@angular/router';



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
	eventId: any;
	loader: Boolean;

	constructor(
		private fb: FormBuilder,
		private config: NgbDatepickerConfig,
		private calendar: NgbCalendar,
		private commonSer: CommonService,
		private eventSer: EventService,
		private router: Router,
		private route: ActivatedRoute,
	) {
		this.pageTitle = 'Event';
		this.eventId = (this.route.snapshot.paramMap.get('event_id') ? this.route.snapshot.paramMap.get('event_id') : 0);
		this.pageAction = 'Add';
		this.addForm();
		this.status = '';
		this.msg = '';
	}

	ngOnInit() {
		this.getCountryList();
		this.getPrograms();
		if (this.eventId > 0) {
			this.pageAction = 'Edit';
			this.editForm();
		}
	}

	public addForm() {
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
			event_youtube_url: [''],
			event_created_by: [1],
			event_id: [0],
			event_short_desc: ['', Validators.required],
		});
	}

	public editForm() {
		this.eventSer.getSingle(this.eventId).subscribe(async retData => {
			if (retData.status === 'success') {
				const data: any = retData.data;
				this.getStateList(data[0].country_id);
				this.getCityList(data[0].region_id);
				const programsArr = await this.setProgramArr(retData.data);
				const startDateObject: any = await this.setDateArr(data[0].event_start_date_time);
				const endDateObject: any = await this.setDateArr(data[0].event_end_date_time);
				this.addEditForm = this.fb.group({
					event_title: [data[0].event_title, Validators.required],
					event_long_desc: [data[0].event_long_desc, Validators.required],
					event_start_date: [startDateObject.dateArr, Validators.required],
					event_end_date: [endDateObject.dateArr, Validators.required],
					event_start_time: [startDateObject.timeArr, Validators.required],
					event_end_time: [endDateObject.timeArr, Validators.required],
					event_about: [data[0].event_about],
					event_objectives: [data[0].event_objectives],
					programs: [programsArr, Validators.required],
					country_id: [data[0].country_id, Validators.required],
					region_id: [data[0].region_id, Validators.required],
					city_id: [data[0].city_id],
					address: [data[0].address, Validators.required],
					pin: [data[0].pin, Validators.required],
					event_youtube_url: [data[0].event_youtube_url],
					event_created_by: [1],
					event_id: [this.eventId],
					event_short_desc: [data[0].event_short_desc, Validators.required],
				});
			}
		})
	}

	/**
	 * setProgramArr
	 */
	public setProgramArr(retData = []) {
		return new Promise((resolve, reject) => {
			if (retData.length > 0) {
				const proData = retData.map((elem) => { if (elem.program_id != '') { return elem.program_id.toString(); } });
				resolve(proData);
			} else {
				resolve([]);
			}
		})
	}

	/**
	 * setdateArr
	 */
	public setDateArr(dateParam = '') {
		return new Promise((resolve, reject) => {
			const newDate = new Date(dateParam);
			const dateArr = {
				year: newDate.getFullYear(),
				month: newDate.getMonth() + 1,
				day: newDate.getDate()
			};
			const timeArr = { hour: newDate.getHours(), minute: newDate.getMinutes() };
			const proData = {
				dateArr,
				timeArr
			}
			resolve(proData);
		})
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

	get f(): any {
		return this.addEditForm.controls;
	}

	public formSave() {
		this.loader = true;
		this.submitted = true;
		// console.log(this.addEditForm.value);
		if (this.addEditForm.valid) {
			if (this.eventId > 0) {
				this.eventSer.update(this.addEditForm.value).subscribe(retData => {
					this.loader = false;
					if (retData.status === 'success') {
						localStorage.setItem('status', retData.status);
						localStorage.setItem('msg', retData.message);
						this.router.navigate(['/admin/events']);
					} else {
						this.status = retData.status;
						this.msg = retData.message;
						// console.log(retData.data);
					}
				})
			} else {
				this.eventSer.add(this.addEditForm.value).subscribe(retData => {
					this.loader = false;
					if (retData.status === 'success') {
						localStorage.setItem('status', retData.status);
						localStorage.setItem('msg', retData.message);
						this.router.navigate(['/admin/events']);
					} else {
						this.status = retData.status;
						this.msg = retData.message;
						// console.log(retData.data);
					}
				})
			}
		} else {
			this.loader = false;
			this.status = 'danger';
			this.msg = 'Please fill the mandatory fields as below.';
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
	 * getStateList
	 */
	public getStateList(countryId = 0) {
		this.commonSer.getState(countryId).subscribe(retData => {
			this.stateList = retData.data;
		});
	}

	/**
	 * updateStateList
	 */
	public updateStateList(event) {
		// console.log(event.target.value);
		if (event.target.value !== '') {
			let countryId = event.target.value;
			this.getStateList(countryId);
		}
	}

	/**
	 * getCityList
	 */
	public getCityList(regionId = 0) {
		this.commonSer.getCity(regionId).subscribe(retData => {
			this.cityList = retData.data;
		});
	}

	/**
	 * updateCityList
	 */
	public updateCityList(event) {
		if (event.target.value !== '') {
			let regionId = event.target.value;
			this.getCityList(regionId);
		}
	}



}
