import { baseUrl } from './baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor(private _HttpClient: HttpClient) { }

  getFeeds(): Observable<any> {
    return this._HttpClient.get(baseUrl + 'Feeds')
  }
  updateFeed(id: string, data: object): Observable<any> {
    return this._HttpClient.put(baseUrl + 'Feeds/' + id, data)
  }
}
