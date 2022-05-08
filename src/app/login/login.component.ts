import { Component,  OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  constructor(private userService:ServicesService, private router: Router) { }


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




  ngOnInit(){}

}
