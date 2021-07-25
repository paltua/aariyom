import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_service';
import { FormBuilder, Validators } from '@angular/forms';
import { SiteService } from 'src/app/_service/site.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {

  email: String;
  mobile: String;
  address: string;
  formObj: any;
  submitted = false;
  status: any = '';
  msg: any = '';
  loader: Boolean = true;
  mapString: any;
  genderArr: String[] = this.commonSer.getGender();
  knowFromArr: String[] = this.commonSer.getKnowFrom();
  constructor(
    public commonSer: CommonService,
    private fb: FormBuilder,
    private siteSer: SiteService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.loader = false;
    this.formObj = this.fb.group({
      jum_name: ['', Validators.required],
      jum_email: ['', [Validators.required, Validators.email]],
      jum_dob: [''],
      jum_phone: [''],
      jum_gender: [''],
      jum_occupation: [''],
      jum_permanent_address: [''],
      jum_present_address: [''],
      jum_know_from: [''],
      jum_any_special_note: [''],
    })
  }

  /**
   * formSave
   */
  public formSave() {
    this.loader = true;
    this.submitted = true;
    if (this.formObj.valid) {
      this.siteSer.checkJoinUsEmail(this.formObj.value).subscribe(emailData => {
        console.log(emailData);
        if (emailData.status == 'success') {
          this.siteSer.addJoinUs(this.formObj.value).subscribe(resData => {
            this.loader = false;
            if (resData.status == 'success') {
              this.submitted = false;
              this.formObj.reset();
            }
            this.status = resData.status;
            this.msg = resData.message;
          })
        } else {
          this.status = emailData.status;
          this.msg = emailData.message;
          this.loader = false;
        }
      })
    } else {
      this.status = 'danger';
      this.msg = 'Please find the error(s) as below.';
      this.loader = false;
    }
  }

  get f(): any {
    return this.formObj.controls;
  }

}
