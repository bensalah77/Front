import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tchat } from '../model/tchat.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  //private _webSocket: WebSocket;
 
  chatMessages: Tchat[] = [];
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


  /*public openWebSocket(){
    this._webSocket = new WebSocket('ws://localhost:8080/chat');

    this._webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this._webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this._webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(chatMessageDto: Tchat){
    this._webSocket.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket() {
    this._webSocket.close();
  }*/


 

 

}
