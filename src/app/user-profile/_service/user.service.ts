import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
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





UpdateUser(id?:number,users?:FormData): Observable<Object> {


  
  return this._httpClient.put<Object>('http://localhost:8082/User/UpdateUser/'+id,users
  );
}




private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$()
  {
    return this._refreshNeeded$;
  }
updateUser(b : FormData,id: number ): Observable<Object> 
{
  return this._httpClient.put<Object>('http://localhost:8082/User/UpdateUser/'+id ,b).pipe( 
                                                                  tap(() => { this._refreshNeeded$.next();
                                                                  })
  );
}



}
