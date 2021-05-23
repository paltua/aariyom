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
	 * getFu
	 */
	public getFu() {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/common/fu_list/');
	}

	/**
	 * getDashboardDetails
	 */
	public getDashboardDetails() {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/common/dashboard_details/');
	}

	/**
	 * getSettings
	 */
	public getSettings(type = 'home') {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/common/settings/' + type);
	}

	/**
	 * getSettings
	 */
	public updateSettings(data = []) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/common/settings_update/', data);
	}

	/**
	 * addAboutUsImageYouTube
	 */
	public addAboutUsImageYouTube(data) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/common/add_settings_about_us_data/', data);
	}

	/**
	 * getAboutUsImageYouTube
	 */
	public getAboutUsImageYouTube(data) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/common/get_settings_about_us_data/', data);
	}

	/**
	 * getAboutUsImageYouTubeHome
	 */
	public getAboutUsImageYouTubeHome($page = 'about_us') {
		return this.http.get<ApiResponses>(this.apiUrl + 'api/common/get_settings_about_us_data_home/' + $page);
	}

	/**
	 * updateAboutUsImgYoutubeSettings
	 */
	public updateAboutUsImgYoutubeSettings(data = {}) {
		return this.http.post<ApiResponses>(this.apiUrl + 'api/common/update_about_us_img_youtube_settings/', data);
	}

	/**
	 * getGender
	 */
	public getGender(data = {}) {
		return ['male', 'female', 'eunuch', 'others'];
	}

	/**
	 * getKnowFrom
	 */
	public getKnowFrom(data = {}) {
		return ['website', 'social-media', 'sebaks', 'publications', 'others'];
	}



}
