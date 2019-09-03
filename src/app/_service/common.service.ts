import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../_models';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class CommonService {
	public countryList: Observable<Country>;
	public apiUrl: any;
	constructor(
		private http: HttpClient
	) {
		this.apiUrl = environment.apiUrl;
	}

	/**
	 * getCountry
	 */
	public getCountry() {
		return this.http.get<Country[]>(this.apiUrl + 'api/common/country_list');
	}

}
