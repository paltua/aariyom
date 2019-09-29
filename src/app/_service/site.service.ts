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
	 * getEventAll
	 */
  public getEventAll() {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/home/get_event_all').pipe(map(retData => {
      return retData;
    }));
  }
}
