
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from '../model/publication.model';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicationserviceService {

  //refresh
  private _refreshNeeded$ = new Subject<void>();
  httpClient: any;
 
  get refreshNeeded$()
  {
    return this._refreshNeeded$;
  }

  constructor(private Publication:HttpClient) { }
/*
  public ajout(b : FormData){
    
    return this.Publication.post("http://localhost:8082/examen/Publication/add-post",b, {
    
   });
   }
   */
   api: string = 'http://localhost:8082/examen/Publication'

   addPub(b : FormData): Observable<Object> {
    return this.Publication.post<Object>("http://localhost:8082/examen/Publication/add-post",b).pipe( 
                                                                    tap(() => { this._refreshNeeded$.next();
                                                                    })
    );
  }

   getPublications(): Observable<any[]> {

    return this.Publication.get<any[]>("http://localhost:8082/examen/Publication/get-all-post");
  }
  removeBadge(id : number): Observable<any> {
    return this.Publication.delete<any>(this.api+'/delete-publication/'+id);
  }

}
