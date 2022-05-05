import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../service/services.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

users:User=new User();
file: any = null;
dates:any

  constructor(private _datePipe: DatePipe,private formBuilder: FormBuilder,private userService:ServicesService, private router: Router) { }


 
  register(){
   
    this.dates=this._datePipe.transform( this.users.birthdate, 'yyyy-MM-dd');
    this.users = this.registerForm.value;
    const formdata = new FormData();
    formdata.append('file', this.file)
    formdata.append('fname', this.users.fname)
    formdata.append('lname', this.users.lname)
    formdata.append('email', this.users.email)
    formdata.append('type', "Human_Ressource_Manager")
    formdata.append('birthdate',this.dates)
    formdata.append('pwd', this.users.pwd)

    console.log(this.users) ;
    
    this.userService.register(formdata)
    .subscribe((response)=>{
      this.router.navigate(['login'])
    },error=>{
      
    });
  }

  getFile(event: any): void{

    this.file = event.target.files[0];
  }
 


  //Form Validables 
  registerForm:any =  FormGroup;
  submitted = false;

  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Great!!");
    }
  
  }

  
    //login form
  ngOnInit(): void {
    //login form
    
   //Add User form validations
   this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    pwd: ['', [Validators.required]],
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    date: ['', [Validators.required]],
    role: ['', [Validators.required]],
    
    });
    
  }

}
