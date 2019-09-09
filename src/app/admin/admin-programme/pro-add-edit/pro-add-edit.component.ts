import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, Validators } from '@angular/forms';
import { ProgrammeService } from 'src/app/_service/programme.service';

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
	constructor(
		private fb: FormBuilder,
		private programmeSer: ProgrammeService,
	) {
		this.pageTitle = 'Programme';
		this.pageAction = 'Add';

		this.addEditForm = this.fb.group({
			program_title: ['', Validators.required],
			programe_desc: ['', Validators.required]
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
		console.log(this.addEditForm.value);
		if (!this.addEditForm.invalid) {
			console.log(this.addEditForm.value);

		}
	}

}
