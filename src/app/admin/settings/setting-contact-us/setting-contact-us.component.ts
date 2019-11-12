import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-setting-contact-us',
  templateUrl: './setting-contact-us.component.html',
  styleUrls: ['./setting-contact-us.component.scss'],
  animations: [routerTransition()],
})
export class SettingContactUsComponent implements OnInit {
  page: string = 'contact_us';
  pageTitle: String = 'Contact Us Setting';
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
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  get f(): any {
    return this.settingsForm.controls;
  }

}
