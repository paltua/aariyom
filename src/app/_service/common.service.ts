import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, ApiResponses } from '../_models';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
	providedIn: 'root'
})
export class CommonService {
	public countryList: Observable<Country>;
	public apiUrl: any;
	public responses: Observable<ApiResponses>;
	constructor(
		private http: HttpClient
	) {
		this.apiUrl = environment.apiUrl;
	}

	/**
	 * getCountry
	 */
	public getCountry() {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/common/country_list');
	}

	/**
	 * getState
	 */
	public getState(country_id = 0) {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/common/state_list/' + country_id);
	}

	/**
	 * getCity
	 */
	public getCity(region_id = 0) {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/common/city_list/' + region_id);
	}

	/**
	 * getPrograms
	 */
	public getPrograms() {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/common/programme_list/');
	}

	/**
	 * getDashboardDetails
	 */
	public getDashboardDetails() {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/common/dashboard_details/');
	}



}
