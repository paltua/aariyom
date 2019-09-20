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

}
