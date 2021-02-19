import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, Validators } from '@angular/forms';
import { ProgrammeService } from '../../../_service/programme.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiResponses, Programme } from './../../../_models';
import { CommonService } from '../../../_service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


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
	fuList: any;

	public editor = ClassicEditor;
	othersOthersDiv: boolean = false;

	constructor(
		private fb: FormBuilder,
		private programmeSer: ProgrammeService,
		private router: Router,
		private route: ActivatedRoute,
		private commonSer: CommonService,
	) {
		this.pageTitle = 'Mission';
		this.status = '';
		this.msg = '';
		this.addEditForm = this.fb.group({
			program_title: ['', Validators.required],
			program_desc: ['', Validators.required],
			program_about: [''],
			program_objectives: [''],
			program_status: ['ongoing'],
			org_by: ['', Validators.required],
			org_by_custom_name: [''],
			program_short_desc: ['', Validators.required],
			created_by: [1]
		});
		this.editId = (this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : 0);
		this.pageAction = 'Add';
		if (this.editId > 0) {
			this.pageAction = 'Edit';
			this.programmeSer.single(this.editId).subscribe(async retData => {
				const data: any = retData.data;
				const fuArr = await this.setFuArr(retData.data);
				this.addEditForm = this.fb.group({
					program_title: [data[0].program_title, Validators.required],
					program_desc: [data[0].program_desc, Validators.required],
					program_about: [data[0].program_about],
					program_objectives: [data[0].program_objectives],
					program_status: [data[0].program_status],
					org_by: [fuArr, Validators.required],
					org_by_custom_name: [data[0].org_by_custom_name],
					program_short_desc: [data[0].program_short_desc, Validators.required],
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
		this.getFuList();
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
			// console.log(this.formData);
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
		this.formData.append('program_about', this.addEditForm.value.program_about);
		this.formData.append('program_objectives', this.addEditForm.value.program_objectives);
		this.formData.append('created_by', this.addEditForm.value.created_by);
		this.formData.append('program_id', this.editId);
		this.formData.append('org_by', this.addEditForm.value.org_by);
		this.formData.append('program_status', this.addEditForm.value.program_status);
		this.formData.append('org_by_custom_name', this.addEditForm.value.org_by_custom_name);
		this.formData.append('program_short_desc', this.addEditForm.value.program_short_desc);
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
		// console.log(this.formData);
		// return false;
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

	/**
	 * getFuList
	 */
	public getFuList() {
		this.fuList = [];
		this.commonSer.getFu().subscribe(retData => {
			this.fuList = retData.data;
		});
	}

	/**
	 * setFuArr
	 */
	public setFuArr(retData = []) {
		return new Promise((resolve, reject) => {
			if (retData.length > 0) {
				const proData = retData.map((elem) => {
					if (elem.fu_id) {
						return elem.fu_id.toString();
					} else {
						if (elem.fu_id === null) {
							this.othersOthersDiv = true;
							return "0";
						} else {
							return elem.fu_id;
						}
					}
				});
				resolve(proData);
			} else {
				resolve([]);
			}
		})
	}

	/**
	 * onChangeCreateOthers
	 */
	public onChangeCreateOthers(newValue) {
		if (this.addEditForm.value.org_by.filter(x => x == "0").length > 0) {
			this.othersOthersDiv = true;
		} else {
			this.othersOthersDiv = false;
		}

	}

}
