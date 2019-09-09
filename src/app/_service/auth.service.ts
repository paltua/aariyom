import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, ApiResponses } from '../_models';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { jwt_decode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public users: Observable<User>;
	public responses: Observable<ApiResponses>;
	public apiUrl: any;
	constructor(
		private http: HttpClient,
		private router: Router

	) {
		this.apiUrl = environment.apiUrl;
	}

	/**
	 * login
	 */
	public login(postData = {}) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/auth/login', postData).pipe(map(retData => {
			console.log(retData);
			if (retData.status === 'success') {
				console.log(retData)
				this.router.navigate(['/admin/dashboard']);
			} else {

			}
		}));
	}

	/**
	 * logout
	 */
	public logout() {
		localStorage.clear();
		this.router.navigate(['/admin/auth/login']);
	}
}
