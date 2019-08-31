import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from './../../../router.animations';
import { FormBuilder } from '@angular/forms';


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

    });
  }

}
