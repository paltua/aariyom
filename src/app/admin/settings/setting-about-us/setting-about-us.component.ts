import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';

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
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.settingsForm = this.fb.group({
      page: [this.page],
      main_text: ['', Validators.required],
    });
  }

  get f(): any {
    return this.settingsForm.controls;
  }

}
