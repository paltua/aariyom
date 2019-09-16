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
		return this.http.post<ApiResponses>(this.apiUrl + 'api/admin/programme/add', postData).pipe(map(retData => {
			// console.log(retData);
			// if (retData.status === 'success' && retData.message === '') {
			// 	console.log(retData)
			// 	this.router.navigate(['/admin/dashboard']);
			// } else {

			// }
			return retData;
		}));
	}

	/**
	 * update
	 */
	public update(updateData = {}, editId = '0') {
		let postData: any = updateData;
		postData.editId = editId;
		return this.http.post<ApiResponses>(this.apiUrl + 'api/admin/programme/update', postData).pipe(map(retData => {
			return retData;
		}));
	}

	/**
	 * delete
	 */
	public delete(program_id = '0') {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/programme/delete/' + program_id).pipe(map(retData => {
			return retData;
		}));
	}

	/**
	 * getSingle
	 */
	public single(id) {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/programme/single/' + id).pipe(map(retData => {
			// console.log(retData);
			return retData;
		}));
	}

	/**
	 * getSingle
	 */
	public list(postData = {}) {
		// console.log('service', postData);
		return this.http.post<any>(this.apiUrl + 'api/admin/programme/list', postData).pipe(map(retData => {
			return retData;
		}));
	}
}
