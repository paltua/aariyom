import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, Validators } from '@angular/forms';
import { ProgrammeService } from 'src/app/_service/programme.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiResponses, Programme } from './../../../_models';


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
	// public programme: Observable<Programme>;
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
			program_status: [''],
			program_image: [this.fileData],
			old_program_image: [''],
			created_by: [1]
		});
		this.editId = (this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : 0);
		this.pageAction = 'Add';
		if (this.editId > 0) {
			this.pageAction = 'Edit';
			this.programmeSer.single(this.editId).subscribe(retData => {
				// this.programme = retData.data[0];
				const data: any = retData.data;
				if (data[0].program_image) {
					this.previewUrl = data[0].image_path;
				}
				// console.log(this.previewUrl);
				this.addEditForm = this.fb.group({
					program_title: [data[0].program_title, Validators.required],
					program_desc: [data[0].program_desc, Validators.required],
					program_status: [''],
					program_image: [this.fileData],
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
		this.formData = new FormData();
	}

	get f(): any {
		return this.addEditForm.controls;
	}

	/**
	 * formSave
	 */
	public formSave() {
		// console.log(this.addEditForm.value);
		this.submitted = true;
		if (!this.addEditForm.invalid) {
			this.setFormData();
			if (this.editId > 0) {
				this.update();
			} else {
				this.add();
			}
		}
	}

	/**
   * setFormData
   */
	public setFormData() {
		this.formData.append('program_title', this.addEditForm.value.program_title);
		this.formData.append('program_desc', this.addEditForm.value.program_desc);
		this.formData.append('program_image', this.fileData);
		this.formData.append('old_program_image', this.addEditForm.value.old_program_image);
		this.formData.append('created_by', this.addEditForm.value.created_by);
		this.formData.append('program_id', this.editId);
	}



	/**
	 * add
	 */
	public add() {
		this.programmeSer.add(this.formData).subscribe(retData => {
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
		console.log(this.formData);
		this.programmeSer.update(this.formData, this.editId).subscribe(retData => {
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
