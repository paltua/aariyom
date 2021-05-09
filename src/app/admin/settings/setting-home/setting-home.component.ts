import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import { CommonService } from 'src/app/_service';

@Component({
  selector: 'app-setting-home',
  templateUrl: './setting-home.component.html',
  styleUrls: ['./setting-home.component.scss'],
  animations: [routerTransition()],
})
export class SettingHomeComponent implements OnInit {
  page: string = 'home';
  pageTitle: String = 'Home Setting';
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
      main_text: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loader = true;
    this.commonService.getSettings(this.page).subscribe(retData => {
      this.loader = false;
      let data: any = retData.data;
      this.settingsForm = this.fb.group({
        page: [this.page],
        main_text: [data.main_text, Validators.required],
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
