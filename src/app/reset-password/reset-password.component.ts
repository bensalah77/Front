import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  users:User=new User();
  constructor(private userService:ServicesService, private router: Router) { }

reset(resetForm:NgForm){


  this.userService.reset(resetForm.value.password)
  .subscribe(
    (response: any) => {
      localStorage.setItem('ResetToken', response.token);
      this.router.navigate(['/login']);
        localStorage.clear();
    },
    (error) => {
      console.log(error);
    }
  );
    
  
}



  ngOnInit(): void {
    
  }




}
