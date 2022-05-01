import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token = localStorage.getItem('token') || '{}';
  constructor(private _httpClient:HttpClient) {}

  getUserDetails(): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.append('token', this.token)
    return this._httpClient.request<any>('get', 'http://localhost:8002/signup/api/user/details',
        {
            headers: headers,
        }
    );
}
}
