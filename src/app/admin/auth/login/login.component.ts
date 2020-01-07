import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
	status: any;
	msg: any;
	returnUrl: string;
	loader: Boolean;
	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private commonService: CommonService,
		private route: Router,
		private router: ActivatedRoute,
	) {
		if (this.authService.currentUserValue) {
			this.route.navigate(['/admin/dashboard']);
		}
		this.status = '';
		this.msg = '';
		this.loader = false;
	}

	ngOnInit() {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required]
		});
		this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/admin/dashboard';
	}


	get f(): any {
		return this.loginForm.controls;
	}


	/**
	 * formSubmit
	 */
	public formSubmit() {
		this.loader = true;
		this.submitted = true;
		let formData = this.loginForm;
		// console.log(formData.value);
		if (!this.loginForm.invalid) {
			this.authService.login(formData.value).subscribe(retData => {
				this.loader = false;
				if (retData.status === 'success') {
					this.status = '';
					this.msg = '';
					this.route.navigate([this.returnUrl]);
				} else if (retData.status === 'danger') {
					this.status = 'danger';
					this.msg = retData.message;
				} else {
					this.status = 'danger';
					this.msg = 'Sorry! Something went wrong.Please try again.';
				}
			})
		} else {
			this.loader = false;
		}
	}

}
