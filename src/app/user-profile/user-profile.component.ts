import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../model/user.model';
import { UserService } from './_service/user.service';
import { DatePipe } from '@angular/common';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  previewSignsrc:any
  users=new User;

  file: any = null;
  dates:any
  imageSrc:any ='C:/Users/Ajengui/git/Rest---App/Rest_App/uploads/CaptureEmail.PNG';
  constructor(private _datePipe: DatePipe,private formBuilder: FormBuilder,private _sanitizer : DomSanitizer,private _userService: UserService, private router: Router) { }



  //Form Validables 
  updateForm!: FormGroup;
  submitted = false;

  //Add user form actions
  get f() { return this.updateForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.updateForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Great!!");
    }
  
  }

  ngOnInit() {
    this._userService.getUserDetails()
    .subscribe((response)=>{
      this.users = response
      
        
      console.log(this.users);
      
     
    }
    )
    this.updateForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      date: ['', [Validators.required]],
      
      pic: ['', [Validators.required]],
      
      });

  }

  convert(base64String : any) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  UpdateUser() {
      
    this.dates=this._datePipe.transform( this.users.birthdate, 'yyyy-MM-dd');
    this.users = this.updateForm.value;
    const formdata = new FormData();
    formdata.append('file', this.file)
    formdata.append('fname', this.users.fname)
    formdata.append('lname', this.users.lname)
    formdata.append('email', this.users.email)
    formdata.append('birthdate',this.dates)
    formdata.append('pwd', this.users.pwd)

    console.log(this.users) ;
    
    this._userService.UpdateUser(formdata)
    .subscribe((response)=>{
      this.router.navigate(['dashboard'])
    },error=>{
      
    });
  }

  getFile(event: any): void{

    this.file = event.target.files[0];
  }
 

  





}
