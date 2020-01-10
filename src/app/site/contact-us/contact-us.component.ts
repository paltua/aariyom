import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_service';
import { FormBuilder, Validators } from '@angular/forms';
import { SiteService } from 'src/app/_service/site.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  email: String;
  mobile: String;
  address: string;
  contactForm: any;
  submitted = false;
  status: any = '';
  msg: any = '';
  loader: Boolean = true;
  mapString: any;
  constructor(public commonSer: CommonService, private fb: FormBuilder, private siteSer: SiteService,
    public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      desccription: ['', Validators.required],
    })
    this.commonSer.getSettings('contact_us').subscribe(retData => {
      let data: any = retData.data;
      this.email = data.email;
      this.mobile = data.mobile;
      this.address = data.address;
      this.mapString = "https://www.google.com/maps/embed/v1/place?q=" + ('Aariyom Foundation, ' + this.address).split(' ').join('+') + "&key=AIzaSyC_9Bu_aS5H64hB0fsN2lKrUSUDfL_HdGQ";
      // console.log(this.mapString);
      this.loader = false;
    });

  }

  /**
   * getMapUrl
   */
  public getMapUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.mapString);
  }

  get f(): any {
    return this.contactForm.controls;
  }

  /**
   * formSave
   */
  public formSave() {
    this.submitted = true;
    if (this.contactForm.status === 'VALID') {
      this.siteSer.addContactUs(this.contactForm.value).subscribe(retData => {
        if (retData.status === 'success') {
          this.submitted = false;
          this.contactForm.reset();
          this.status = 'success';
          this.msg = 'You have successfully submited your query';
        } else {
          this.status = 'danger';
          this.msg = retData.message;
        }
      })
    } else if (this.contactForm.status === 'INVALID') {
      this.status = 'danger';
      this.msg = 'Please find the error(s) as below';
    }
  }

}
