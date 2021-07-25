import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponses } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class JoinUsService {

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
    return this.http.post<any>(this.apiUrl + 'api/admin/joinus/list', postData).pipe(map(retData => {
      return retData;
    }));
  }
}
