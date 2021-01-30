import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
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
	private currentUserSubject: BehaviorSubject<User>;
	public currentUser: Observable<User>;
	constructor(
		private http: HttpClient,
		private router: Router

	) {
		this.apiUrl = environment.apiUrl;
		console.log(localStorage.getItem('currentUser'));
		this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): User {
		return this.currentUserSubject.value;
	}

	/**
	 * login
	 */
	public login(postData = {}) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/auth/login', postData).pipe(map(retData => {
			let userDet: any = retData.data;
			
			localStorage.setItem('currentUser', JSON.stringify(retData.data));
			this.currentUserSubject.next(userDet.user_id);
			return retData;
		}));
	}

	/**
	 * logout
	 */
	public logout() {
		localStorage.removeItem('currentUser');
		localStorage.clear();
		this.currentUserSubject.next(null);
		this.router.navigate(['/admin/auth/login']);
	}
}
