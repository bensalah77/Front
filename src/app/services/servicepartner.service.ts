import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partner } from '../model/partner.model';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicepartnerService {

  //refresh
  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$()
  {
    return this._refreshNeeded$;
  }
api : string = 'http://localhost:8082/examen/Partner'
  constructor( private http : HttpClient) { }
  prefix : string = 'http://localhost:8082/Partner'

  addPartner(fd : FormData) : Observable<any>{
         return this.http.post<Object>(this.api+'/new',fd).pipe( 
        tap(() => { this._refreshNeeded$.next();
        })
);
  }

  getPartners(): Observable<Partner[]> {

    return this.http.get<Partner[]>(this.api+'/'+'list');
  }
  removePartner(id : number): Observable<any> {
    return this.http.delete<any>(this.api+'/delete/'+id).pipe( 
      tap(() => { this._refreshNeeded$.next();
      })
);
  }
}
