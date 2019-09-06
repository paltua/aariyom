import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { jwt_decode } from 'jwt-decode';
import { Responses } from '../_models/responses';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public users: Observable<User>;
	public responses: Observable<Responses>;
	public apiUrl: any;
	constructor(
		private http: HttpClient,
		private route: Router

	) {
		this.apiUrl = environment.apiUrl;
	}

	/**
	 * login
	 */
	public login(postData = {}) {
		return this.http.post(this.apiUrl + 'api/auth/login', postData).pipe(map(retData => {
			return retData;
			// return true;
			// return jwt_decode(user);
		}));
	}
}
