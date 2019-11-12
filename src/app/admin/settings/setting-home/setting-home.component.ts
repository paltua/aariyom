import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';

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
