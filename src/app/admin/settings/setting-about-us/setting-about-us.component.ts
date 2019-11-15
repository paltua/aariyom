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
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService
  ) {
    this.settingsForm = this.fb.group({
      page: [this.page],
      who_we_are: ['', Validators.required],
      our_mission: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.commonService.getSettings(this.page).subscribe(retData => {
      let data: any = retData.data;
      this.editorData = data.who_we_are;
      // console.log(this.editorData);
      this.settingsForm = this.fb.group({
        page: [this.page],
        who_we_are: [this.editorData, Validators.required],
        our_mission: [data.our_mission, Validators.required],
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
      this.submitted = true;
      this.commonService.updateSettings(this.settingsForm.value).subscribe(retData => {
        this.status = 'success';
        this.msg = 'You have successfully updated the ' + this.pageTitle;
      });
    } else if (this.settingsForm.invalid) {
      this.submitted = true;
      this.status = 'danger';
      this.msg = 'Please find the error(s) as below.';
    }
  }

}
