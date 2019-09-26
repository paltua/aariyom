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
export class EventService {
	public responses: Observable<ApiResponses>;
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
	public add(eventData) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/admin/event/add', eventData).pipe(map(retData => {
			return retData;
		}));
	}

	/**
	 * GetSingle
	 */
	public list(postData = {}) {
		// console.log('service', postData);
		return this.http.post<any>(this.apiUrl + 'api/admin/event/list', postData).pipe(map(retData => {
			return retData;
		}));
	}

	/**
	 * GetSingle
	 */
	public getSingle(event_id = 0) {
		// console.log('service', postData);
		return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/event/single/' + event_id).pipe(map(retData => {
			return retData;
		}));
	}

	/**
	 * update
	 */
	public update(eventData = {}) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/admin/event/update', eventData).pipe(map(retData => {
			return retData;
		}));
	}

	/**
	 * delete
	 */
	public delete(eventId = '0') {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/event/delete/' + eventId).pipe(map(retData => {
			return retData;
		}));
	}

	/**
	 * delete
	 */
	public upload(postData = {}) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/admin/event/image_upload/', postData).pipe(map(retData => {
			return retData;
		}));
	}

	/**
	 * delete
	 */
	public image_list(eventId = '0') {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/event/image_list/' + eventId).pipe(map(retData => {
			return retData;
		}));
	}

}
