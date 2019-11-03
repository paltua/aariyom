import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponses } from '../_models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public responses: Observable<ApiResponses>;
  public apiUrl: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.apiUrl = environment.apiUrl;
  }
  /**
	 * Get List with pagination
	 */
  public list(postData = {}) {
    // console.log('service', postData);
    return this.http.post<any>(this.apiUrl + 'api/admin/contactus/list', postData).pipe(map(retData => {
      return retData;
    }));
  }
}
