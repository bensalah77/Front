import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { Tchat } from '../model/tchat.model';
import { UserService } from '../user-profile/_service/user.service';
import { User } from '../model/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.scss']
})
export class TchatComponent implements OnInit {

  constructor(private _userService: ServicesService,private userService: UserService, private router: Router) { }
 
 chat?:Tchat[] ;
 users=new User;
  ngOnInit(): void {
   
   /* this._userService.Rchat(this.id)
    .subscribe((data: Tchat[]) => (this.chat = data)); 
     //console.log(this.chat);*/

    
     this.userService.getUserDetails()
     .subscribe((response:any)=>{
       this.users = response
    
         
       console.log(this.users.tchatR);
       
      
     }
     )


  }
  chatS=new Tchat()
 public send(sendForm:NgForm){


    this._userService.chat(sendForm.value.textMessage)
    .subscribe(
      (response: any) => {
        this.chatS=sendForm.value.textMessage;
        this.router.navigate(['/dashboard/chat']);
      },
      (error) => {
        console.log(error);
      }
    );
      
    
  }


}
