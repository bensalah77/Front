import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from './_service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:User = new User();
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUserDetails()
    .subscribe((response)=>{
      this.user = response
    })
  }

}
