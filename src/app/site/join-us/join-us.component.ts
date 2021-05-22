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
  contactForm: any;
  submitted = false;
  status: any = '';
  msg: any = '';
  loader: Boolean = true;
  mapString: any;
  constructor(
    public commonSer: CommonService,
    private fb: FormBuilder,
    private siteSer: SiteService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.loader = false;
    this.contactForm = this.fb.group({
      jum_name: ['', Validators.required],
      jum_email: ['', [Validators.required, Validators.email]],
      jum_dob: ['', Validators.required],
      jum_gender: ['', Validators.required],
      jum_phone: ['', Validators.required],
      jum_permanent_address: ['', Validators.required],
      jum_present_address: [''],
      jum_occupation: [''],
      jum_know_from: [''],
      jum_any_special_note: [''],
    })
  }

}
