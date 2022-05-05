import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token = localStorage.getItem('jwtToken') || '{}';
  constructor(private _httpClient:HttpClient) {}

  getUserDetails(): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.append('Authorization','Bearer '+ this.token)
    
    return this._httpClient.get<any>('http://localhost:8082/User/details',
        {
            headers: headers,
        }
    );
}
}
