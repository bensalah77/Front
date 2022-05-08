import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


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


 

 

}
