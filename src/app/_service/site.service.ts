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
    if (str != null) {
      return (str.length > charCount) ? (str.slice(0, charCount) + '..') : (str);
    } else {
      return '';
    }

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
   * getEventByProgramme
   */
  public getEventByProgramme(program_id = 0) {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/getEventByProgramme/' + program_id).pipe(map(retData => {
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

  /**
   * getSingleProgrammeDetails
   */
  public getSingleProgrammeDetails(pro_title_url = '') {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/get_programme_details/' + pro_title_url).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * getSingleFunctionalUnitDetails
   */
  public getSingleFunctionalUnitDetails(fu_title_url = '') {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/get_fu_details/' + fu_title_url).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * getOthersProgramme
   */
  public getOthersProgramme(id = 0) {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/get_others_programme/' + id).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * getOthersFu
   */
  public getOthersFu(id = 0) {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/get_others_fu/' + id).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * completedStatus
   */
  public completedStatus(date_time = new Date()) {
    let nowDateTime = new Date();
    let eventEndDate = new Date(date_time);
    if (eventEndDate > nowDateTime) {
      return true;
    } else {
      return false;
    }
  }

}
