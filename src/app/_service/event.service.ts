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
	 * Get List with pagination
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
	 * upload
	 */
	public upload(postData = {}) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/admin/event/image_upload/', postData).pipe(map(retData => {
			return retData;
		}));
	}

	/**
	 * image_list
	 */
	public image_list(eventId = '0') {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/event/image_list/' + eventId).pipe(map(retData => {
			return retData;
		}));
	}

	/**
	 * updateDefaultImage
	 */
	public updateDefaultImage(eventId = 0, ei_id = 0) {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/event/image_list_default/' + eventId + '/' + ei_id).pipe(map(retData => {
			return retData;
		}));
	}

	/**
	 * deleteImage
	 */
	public deleteImage(eventId = 0, ei_id = 0) {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/event/delete_image/' + eventId + '/' + ei_id).pipe(map(retData => {
			return retData;
		}));
	}

}
