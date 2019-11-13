import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  email: String;
  mobile: String;
  address: String;
  contactForm: any;
  constructor(public commonSer: CommonService, private fb: FormBuilder, ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required, Validators],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      desccription: ['', Validators.required],
    })
    this.commonSer.getSettings('contact_us').subscribe(retData => {
      let data: any = retData.data;
      this.email = data.email;
      this.mobile = data.mobile;
      this.address = data.address;
    })
  }

  /**
   * formSave
   */
  public formSave() {
    console.log(this.contactForm);
  }

}
