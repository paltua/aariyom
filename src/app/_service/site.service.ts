import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, ApiResponses } from '../_models';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  public apiUrl: any;
  public responses: Observable<ApiResponses>;
  constructor(
    private http: HttpClient,
  ) {
    this.apiUrl = environment.apiUrl;
  }

  /**
   * getFunctionalUnitHome
   */
  public getFunctionalUnitHome() {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/index_fu').pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * getEventHome
   */
  public getEventHome() {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/index_event').pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * getEventHomeSlider
   */
  public getEventHomeSlider() {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/index_event_slider').pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * getProgrameHome
   */
  public getProgrameHome() {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/index_program').pipe(map(retData => {
      return retData;
    }));
  }

  /**
	 * getEventAll
	 */
  public getEventAll() {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/get_event_all').pipe(map(retData => {
      return retData;
    }));
  }

  /**
	 * getSingleEvent
	 */
  public getSingleEvent(event_id = 0) {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/get_event_details/' + event_id).pipe(map(retData => {
      return retData;
    }));
  }

  /**
	 * getAllPrograms
	 */
  public getAllPrograms() {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/get_all_programs/').pipe(map(retData => {
      return retData;
    }));
  }

  /**
	 * truncateStr
	 */
  public truncateStr(str = '', charCount = 20) {
    return (str.length > charCount) ? (str.slice(0, charCount) + '..') : (str);
  }

  /**
   * addContactUs
   */
  public addContactUs(data) {
    return this.http.post<ApiResponses>(this.apiUrl + 'api/admin/contactus/add', data).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * getUpcomingEvent
   */
  public getUpcomingEvent() {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/getUpcomingEvent').pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * getArchive
   */
  public getArchive() {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/getArchive').pipe(map(retData => {
      return retData;
    }));
  }

}
