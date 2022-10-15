import { baseUrl } from './baseUrl';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private _HttpClient: HttpClient) { }

  getStories(): Observable<any> {
    return this._HttpClient.get(baseUrl + 'stories')
  }
  //https://63498a46a59874146b227f68.mockapi.io/api/v1/stories
}
