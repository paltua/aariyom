import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, Validators } from '@angular/forms';
import { ProgrammeService } from 'src/app/_service/programme.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiResponses, Programme } from './../../../_models';
import { Observable } from 'rxjs';


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
	editId: any;
	public programme: Observable<Programme>;
	fileData: File = null;
	previewUrl: any = null;
	fileUploadProgress: string = null;
	uploadedFilePath: string = null;
	formData: any;
	constructor(
		private fb: FormBuilder,
		private programmeSer: ProgrammeService,
		private router: Router,
		private route: ActivatedRoute,
	) {
		this.pageTitle = 'Programme';
		this.status = '';
		this.msg = '';

		this.addEditForm = this.fb.group({
			program_title: ['', Validators.required],
			program_desc: ['', Validators.required],
			program_image: ['', Validators.required],
			old_program_image: [''],
			created_by: [1]
		});
		this.editId = (this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : 0);
		this.pageAction = 'Add';
		if (this.editId > 0) {
			this.pageAction = 'Edit';
			this.programmeSer.single(this.editId).subscribe(retData => {
				// this.programme = retData.data[0];
				let data: any = retData.data;
				this.addEditForm = this.fb.group({
					program_title: [data[0].program_title, Validators.required],
					program_desc: [data[0].program_desc, Validators.required],
					program_image: [data[0].program_image, Validators.required],
					old_program_image: [data[0].program_image],
					created_by: [1]
				});
			});
		}
	}

	fileProgress(fileInput: any) {
		this.fileData = <File>fileInput.target.files[0];
		this.preview();
	}

	preview() {
		// Show preview 
		var mimeType = this.fileData.type;
		if (mimeType.match(/image\/*/) == null) {
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(this.fileData);
		reader.onload = (_event) => {
			this.previewUrl = reader.result;
		}
	}

	ngOnInit() {

	}

	get f(): any {
		return this.addEditForm.controls;
	}

	/**
	 * formSave
	 */
	public formSave() {
		this.submitted = true;
		if (!this.addEditForm.invalid) {
			if (this.editId > 0) {
				this.update();
			} else {
				this.add();
			}
		}
	}

	/**
	 * add
	 */
	public add() {
		this.programmeSer.add(this.addEditForm.value).subscribe(retData => {
			this.status = retData.status;
			this.msg = retData.message;
			if (this.status === 'success') {
				localStorage.setItem('status', this.status);
				localStorage.setItem('msg', this.msg);
				this.router.navigate(['/admin/programs']);
			}
		});
	}

	/**
	 * update
	 */
	public update() {
		this.programmeSer.update(this.addEditForm.value, this.editId).subscribe(retData => {
			this.status = retData.status;
			this.msg = retData.message;
			if (this.status === 'success') {
				localStorage.setItem('status', this.status);
				localStorage.setItem('msg', this.msg);
				this.router.navigate(['/admin/programs']);
			}
		});
	}

}
