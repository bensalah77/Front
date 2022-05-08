import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Badge } from '../model/badge';
import { Observable, Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BadgeeService {

  id?: number;

  //refresh
  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$()
  {
    return this._refreshNeeded$;
  }

  api: string = 'http://localhost:8082/examen/Badge'

  public dataForm? : FormGroup;


  constructor(private httpClient: HttpClient) { }

  addBadge(b : FormData): Observable<Object> {
    return this.httpClient.post<Object>(this.api+'/AjoutBadge',b).pipe( 
                                                                    tap(() => { this._refreshNeeded$.next();
                                                                    })
    );
  }

  updateBadge(idBadge: number ,b : FormData): Observable<Object> {
    return this.httpClient.put<Object>(this.api+'/update/'+idBadge ,b).pipe( 
                                                                    tap(() => { this._refreshNeeded$.next();
                                                                    })
    );
  }

  getBadges(): Observable<Badge[]> {

    return this.httpClient.get<Badge[]>(this.api+'/'+'Badges');
  }

  removeBadge(idBadge : number): Observable<any> {
    return this.httpClient.delete<Badge>(this.api+'/delete/'+idBadge).pipe( 
      tap(() => { this._refreshNeeded$.next();
      })
);
  }

  voteBadge(idBadge : number, c: FormData): Observable<Object>{
    return this.httpClient.put<Object>(this.api+'/voteBadge/'+idBadge,c);
  }

  getId(getId?: number){
    this.id = getId;
  }

//////////////// TO DO GET BY ID BY MYSELF
  getBadgeById(id: number): Observable<any>
  {
    return this.httpClient.get<any>(this.api+'/'+id);
    //return this.httpClient.get<Object>(this.api+'/'+this.id);
  }


  
}
 