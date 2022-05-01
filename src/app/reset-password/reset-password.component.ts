import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private userService:ServicesService, private router: Router) { }

reset(password:string){
  this.userService.reset(password)
 {
    this.router.navigate(['login'])
  }
    
  
}



  ngOnInit(): void {
  }




}
