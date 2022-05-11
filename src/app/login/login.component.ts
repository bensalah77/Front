import { Component,  OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  constructor(private userService:ServicesService, private router: Router,  private socialAuthService: SocialAuthService) { }


  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        
        localStorage.setItem('jwtToken', response.token);
       
          this.router.navigate(['/dashboard']);
       
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }



  socialUser!: SocialUser;
 
  ngOnInit(){
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
     
      console.log(this.socialUser);
    });
  }

}
