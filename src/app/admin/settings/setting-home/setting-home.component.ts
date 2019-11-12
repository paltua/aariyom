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
    this.commonService.getSettings(this.page).subscribe(retData => {
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
    console.log(this.settingsForm.value);
  }

}
