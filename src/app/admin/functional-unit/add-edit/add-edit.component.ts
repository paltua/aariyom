import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import { CommonService } from 'src/app/_service';
import { EventService } from './../../../_service/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FunctionalunitService } from 'src/app/_service/functionalunit.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
  animations: [routerTransition()]
})
export class AddEditComponent implements OnInit {

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
  dataId: any;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  formData: any;
  constructor(
    private fb: FormBuilder,
    private commonSer: CommonService,
    private fuSer: FunctionalunitService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.pageTitle = 'Functional Unit';
    this.dataId = (this.route.snapshot.paramMap.get('fu_id') ? this.route.snapshot.paramMap.get('fu_id') : 0);
    this.pageAction = 'Add';
    this.addForm();
    this.status = '';
    this.msg = '';
  }

  ngOnInit() {
    this.formData = new FormData();
    if (this.dataId > 0) {
      this.pageAction = 'Edit';
      this.editForm();
    }
  }

  /**
   * addForm
   */
  public addForm() {
    this.addEditForm = this.fb.group({
      fu_title: ['', Validators.required],
      fu_desc: ['', Validators.required],
      fu_image_name: [this.fileData],
      fu_created_by: [1],
      fu_id: 0,
    });
  }

  /**
   * editForm
   */
  public editForm() {
    this.fuSer.getSingle(this.dataId).subscribe(retData => {
      if (retData.status === 'success') {
        const data: any = retData.data;
        this.previewUrl = data[0].image_path;
        this.addEditForm = this.fb.group({
          fu_title: [data[0].fu_title, Validators.required],
          fu_desc: [data[0].fu_desc, Validators.required],
          fu_image_name: [this.fileData],
          fu_created_by: [1],
          fu_id: data[0].fu_id,
        });
      }
    });
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

  get f(): string {
    return this.addEditForm.controls;
  }

  public formSave() {
    this.submitted = true;
    if (!this.addEditForm.invalid) {
      this.setFormData();
      if (this.dataId > 0) {
        this.fuSer.update(this.formData).subscribe(retData => {
          if (retData.status === 'success') {
            localStorage.setItem('status', retData.status);
            localStorage.setItem('msg', retData.message);
            this.router.navigate(['/admin/events/listing']);
          } else {
            this.status = retData.status;
            this.msg = retData.message;
            // console.log(retData.data);
          }
        })
      } else {
        this.fuSer.add(this.formData).subscribe(retData => {
          if (retData.status === 'success') {
            localStorage.setItem('status', retData.status);
            localStorage.setItem('msg', retData.message);
            this.router.navigate(['/admin/functional-units']);
          } else {
            this.status = retData.status;
            this.msg = retData.message;
          }
        })
      }
    }
  }

  /**
   * setFormData
   */
  public setFormData() {
    this.formData.append('fu_title', this.addEditForm.value.fu_title);
    this.formData.append('fu_desc', this.addEditForm.value.fu_title);
    this.formData.append('fu_image_name', this.fileData);
    this.formData.append('fu_created_by', this.addEditForm.value.fu_created_by);
    this.formData.append('fu_id', this.addEditForm.value.fu_id);
  }

}
