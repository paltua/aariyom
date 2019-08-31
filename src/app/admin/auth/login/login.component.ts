import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from './../../../router.animations';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  title = 'Control Panel';
  loginForm: any;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  get f(): string {
    return this.loginForm.controls;
  }


  get password(): string {
    return this.loginForm.get('password');
  }



  /**
   * formSubmit
   */
  public formSubmit() {
    let formData = this.loginForm;
    if (formData.status === 'VALID') {
      console.warn(formData);
    }

  }

}
