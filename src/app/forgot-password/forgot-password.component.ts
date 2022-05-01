import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
 
  constructor(private userService:ServicesService, private router: Router) { }



  forgot(forgotForm: NgForm){
    console.log(forgotForm.value.email) ;
    
    this.userService.forgot(forgotForm.value.email)
    .subscribe(
      (response: any) => {

          this.router.navigate(['/login']);
       
      },
      (error) => {
        console.log(error);
      }
    );
  }






  //login form
ngOnInit(){

}

}
