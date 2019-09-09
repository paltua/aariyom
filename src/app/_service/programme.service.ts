import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponses, Programme } from '../_models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProgrammeService {
	public responses: Observable<ApiResponses>;
	public programme: Observable<Programme>;
	public apiUrl: any;
	constructor(
		private http: HttpClient,
		private router: Router
	) {
		this.apiUrl = environment.apiUrl;
	}

	/**
	 * add
	 */
	public add(postData = {}) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/programme/add', postData).pipe(map(retData => {
			console.log(retData);
			// if (retData.status === 'success' && retData.message === '') {
			// 	console.log(retData)
			// 	this.router.navigate(['/admin/dashboard']);
			// } else {

			// }
		}));
	}

	/**
	 * update
	 */
	public update(postData = {}) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/programme/add', postData).pipe(map(retData => {
			console.log(retData);
			// if (retData.status === 'success' && retData.message === '') {
			// 	console.log(retData)
			// 	this.router.navigate(['/admin/dashboard']);
			// } else {

			// }
		}));
	}

	/**
	 * getSingle
	 */
	public single(postData = {}) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/programme/single', postData).pipe(map(retData => {
			console.log(retData);
			// if (retData.status === 'success' && retData.message === '') {
			// 	console.log(retData)
			// 	this.router.navigate(['/admin/dashboard']);
			// } else {

			// }
		}));
	}

	/**
	 * getSingle
	 */
	public list(postData = {}) {
		// return true;
		return this.http.post<ApiResponses>(this.apiUrl + 'api/programme/list', postData).pipe(map(retData => {
			return retData;
		}));
	}
}
