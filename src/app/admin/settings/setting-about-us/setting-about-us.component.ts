import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CommonService } from 'src/app/_service';

@Component({
  selector: 'app-setting-about-us',
  templateUrl: './setting-about-us.component.html',
  styleUrls: ['./setting-about-us.component.scss'],
  animations: [routerTransition()],
})
export class SettingAboutUsComponent implements OnInit {
  page: string = 'about_us';
  pageTitle: String = 'About Us Setting';
  status: String = '';
  msg: String = '';
  settingsForm: any;
  submitted = false;
  public editor = ClassicEditor;
  public editorData = '';
  public start_date = '';
  public model: any;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  formData: any;
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService
  ) {
    this.settingsForm = this.fb.group({
      page: [this.page],
      who_we_are: ['', Validators.required],
      our_mission: ['', Validators.required],
      image: [''],
      old_image: [''],
    });
  }

  ngOnInit() {
    this.formData = new FormData();
    this.commonService.getSettings(this.page).subscribe(retData => {
      let data: any = retData.data;
      // console.log(data);
      this.previewUrl = data.image_path;
      this.settingsForm = this.fb.group({
        who_we_are: [data.who_we_are, Validators.required],
        our_mission: [data.our_mission, Validators.required],
        image: [this.fileData],
        old_image: [data.image],
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
    if (this.settingsForm.valid) {
      this.setFormData();
      this.submitted = true;
      this.commonService.updateSettings(this.formData).subscribe(retData => {
        this.status = 'success';
        this.msg = 'You have successfully updated the ' + this.pageTitle;
      });
    } else if (this.settingsForm.invalid) {
      this.submitted = true;
      this.status = 'danger';
      this.msg = 'Please find the error(s) as below.';
    }
    window.scroll(0, 0);
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

  /**
   * setFormData
   */
  public setFormData() {
    this.formData.append('who_we_are', this.settingsForm.value.who_we_are);
    this.formData.append('our_mission', this.settingsForm.value.our_mission);
    this.formData.append('image', this.fileData);
    this.formData.append('old_image', this.settingsForm.value.old_image);
  }

}

