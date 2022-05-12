import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable,Subject  } from 'rxjs';
import { Tchat } from '../model/tchat.model';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {


 
 

requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private user:HttpClient) {}

 
  public register(users?:FormData):Observable<Object>{
    
    return this.user.post<Object>("http://localhost:8082/Authentification/signup",users) 
  }
 
 
  public login(loginData:any){
    
   return this.user.post("http://localhost:8082/Authentification/login",loginData, {
    headers: this.requestHeader,
  });
  }



 public forgot(email:any){
    return this.user.post("http://localhost:8082/Authentification/forgot/"+email, {
      headers: this.requestHeader,
    });;
  }
  
  token = localStorage.getItem('ResetToken');
  public reset(password?:any){
    
    return this.user.post("http://localhost:8082/Authentification/reset/"+this.token+"/"+password, {
     
    });
  }



  public Rchat(id?:Number): Observable<Tchat[]>{
      return this.user.get<Tchat[]>("http://localhost:8082/TCHAT/receiverTChat/"+id);
     }

     private _refreshNeeded$ = new Subject<void>();
     get refreshNeeded$()
     {
       return this._refreshNeeded$;
     }
   
  public chat(textMessage?:any){ 
    let body={
      "textMessage":textMessage
    }
    return this.user.post("http://localhost:8082/TCHAT/sendTChat/"+3,body, {
      headers: this.requestHeader,
    }).pipe( 
      tap(() => { this._refreshNeeded$.next();
      })
);
};
   




 

 

}
