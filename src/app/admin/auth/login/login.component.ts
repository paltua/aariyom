import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from './../../../router.animations';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, CommonService } from './../../../_service';
import { Observable } from 'rxjs';
import { ApiResponses } from '../../../_models';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
	title = 'Control Panel';
	loginForm: any;
	submitted = false;
	data: any;
	responses: Observable<ApiResponses>;
	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private commonService: CommonService,
		private route: Router
	) { }

	ngOnInit() {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required]
		});
		// this.commonService.getCountry().pipe().subscribe(retData => {

		// });
	}


	get f(): any {
		return this.loginForm.controls;
	}


	/**
	 * formSubmit
	 */
	public formSubmit() {
		this.submitted = true;
		let formData = this.loginForm;
		// console.log(formData.value);
		if (!this.loginForm.invalid) {
			this.authService.login(formData.value).subscribe(retData => {

			})
		}
	}

}
