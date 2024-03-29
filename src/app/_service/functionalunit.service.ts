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
export class FunctionalunitService {
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
  public add(addData) {
    return this.http.post<ApiResponses>(this.apiUrl + 'api/admin/fu/add', addData).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * GetSingle
   */
  public list(postData = {}) {
    // console.log('service', postData);
    return this.http.post<any>(this.apiUrl + 'api/admin/fu/list', postData).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * GetSingle
   */
  public getSingle(fu_id = 0) {
    // console.log('service', postData);
    return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/fu/single/' + fu_id).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * update
   */
  public update(eventData = {}) {
    return this.http.post<ApiResponses>(this.apiUrl + 'api/admin/fu/update', eventData).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * delete
   */
  public delete(fu_id = '0') {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/fu/delete/' + fu_id).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * upload
   */
  public upload(postData = {}) {
    return this.http.post<ApiResponses>(this.apiUrl + 'api/admin/fu/image_upload/', postData).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * image_list
   */
  public image_list(fu_id = '0') {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/fu/image_list/' + fu_id).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * updateDefaultImage
   */
  public updateDefaultImage(fu_id = 0, fu_img_id = 0) {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/fu/image_list_default/' + fu_id + '/' + fu_img_id).pipe(map(retData => {
      return retData;
    }));
  }

  /**
   * deleteImage
   */
  public deleteImage(fu_id = 0, fu_img_id = 0) {
    return this.http.get<ApiResponses>(this.apiUrl + 'api/admin/fu/delete_image/' + fu_id + '/' + fu_img_id).pipe(map(retData => {
      return retData;
    }));
  }

}
