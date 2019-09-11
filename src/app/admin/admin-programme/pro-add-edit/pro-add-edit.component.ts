import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, Validators } from '@angular/forms';
import { ProgrammeService } from 'src/app/_service/programme.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-pro-add-edit',
	templateUrl: './pro-add-edit.component.html',
	styleUrls: ['./pro-add-edit.component.scss'],
	animations: [routerTransition()]
})
export class ProAddEditComponent implements OnInit {

	pageTitle: string;
	pageAction: string;
	addEditForm: any;
	submitted = false;
	status: any;
	msg: any;
	constructor(
		private fb: FormBuilder,
		private programmeSer: ProgrammeService,
		private router: Router,
	) {
		this.pageTitle = 'Programme';
		this.pageAction = 'Add';
		this.status = '';
		this.msg = '';

		this.addEditForm = this.fb.group({
			program_title: ['', Validators.required],
			program_desc: ['', Validators.required],
			created_by: [1]
		});
	}

	ngOnInit() {
	}

	get f(): string {
		return this.addEditForm.controls;
	}

	/**
	 * formSave
	 */
	public formSave() {
		this.submitted = true;
		if (!this.addEditForm.invalid) {
			this.programmeSer.add(this.addEditForm.value).subscribe(retData => {
				this.status = retData.status;
				this.msg = retData.message;
				if (this.status === 'success') {
					localStorage.setItem('status', this.status);
					localStorage.setItem('msg', this.msg);
					this.router.navigate(['/admin/programs/add-edit']);
				}
			});
		}
	}

}
