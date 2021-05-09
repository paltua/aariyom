import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import { CommonService } from 'src/app/_service/common.service';

@Component({
	selector: 'app-setting-contact-us',
	templateUrl: './setting-contact-us.component.html',
	styleUrls: ['./setting-contact-us.component.scss'],
	animations: [routerTransition()],
})
export class SettingContactUsComponent implements OnInit {
	page: string = 'contact_us';
	pageTitle: String = 'Contact Us Setting';
	status: String = '';
	msg: String = '';
	settingsForm: any;
	submitted = false;
	loader: Boolean;
	constructor(
		private fb: FormBuilder,
		private commonService: CommonService
	) {
		this.settingsForm = this.fb.group({
			page: [this.page],
			email: ['', Validators.required],
			mobile: ['', Validators.required],
			address: ['', Validators.required],
		});
	}

	ngOnInit() {
		this.loader = true;
		this.commonService.getSettings(this.page).subscribe(retData => {
			this.loader = false;
			let data: any = retData.data;
			this.settingsForm = this.fb.group({
				page: [this.page],
				email: [data.email, Validators.required],
				mobile: [data.mobile, Validators.required],
				address: [data.address, Validators.required],
			});
		});
	}

	get f(): any {
		return this.settingsForm.controls;
	}

	/**
	 * formSave
	 */
	public formSave() {
		this.loader = true;
		if (this.settingsForm.valid) {
			this.submitted = true;
			this.commonService.updateSettings(this.settingsForm.value).subscribe(retData => {
				this.loader = false;
				this.status = 'success';
				this.msg = 'You have successfully updated the ' + this.pageTitle;
			});
		} else if (this.settingsForm.invalid) {
			this.loader = false;
			this.submitted = true;
			this.status = 'danger';
			this.msg = 'Please find the error(s) as below.';
		}
	}

}
