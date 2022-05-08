import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Badge } from '../model/badge';
import { BadgeeService } from '../services/badgee.service';

@Component({
  selector: 'app-edit-badge',
  templateUrl: './edit-badge.component.html',
  styleUrls: ['./edit-badge.component.scss']
})
export class EditBadgeComponent implements OnInit {

  
  badge?: Badge[];
  hidden : boolean = true;
  b: Badge = new Badge();
  b_old: Badge = new Badge();

  
  

  //Form Validables 
  img: any = null;
  img_old: any = null;
  myGroup:any =  FormGroup;  
  myGroup_img:any =  FormGroup; 
  submitted = false;

  


  constructor(private formBuilder: FormBuilder ,
              private badgeService : BadgeeService,
              private router: Router,
              private _activatedRoute: ActivatedRoute,
              private _sanitizer : DomSanitizer ) 
  { 
    
    this.b_old = Object(this.badgeService.getBadgeById(Number(this._activatedRoute.snapshot.paramMap.get('id'))));
  
    this.myGroup_img = new FormGroup(
      { 
        img : new FormControl(this.b_old.img),
      }
    );
  }

  convert(base64String : any) {
      return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
    }

  ngOnInit(): void {
      

    
    
    //Number: "string|null" to "int"
    let id = Number(this._activatedRoute.snapshot.paramMap.get('id')); 
    this.badgeService.getBadgeById(id).subscribe(
      data => { 
        this.b = data

        this.myGroup = new FormGroup(
          {
            nbVoteYes : new FormControl(this.b.nbVoteYes),
            nbVoteNo : new FormControl(this.b.nbVoteNo),
            nbVoteABS : new FormControl(this.b.nbVoteABS),
            img : new FormControl(this.b.img),
          }
        );


      },
      error=> {console.log("exception has occured!!");}
    );
    
    

   
 

          
  } 

    //update  badge form actions
    get f() 
    { 

      return this.myGroup.controls; 
    }

    onSubmit() {
      
      this.submitted = true;
      // stop here if form is invalid
      if (this.myGroup.invalid) {
        
          return;
      }
      //True if all the fields are filled
      if(this.submitted)
      {
       // alert("Great!!");
        this.router.navigate(['/badge']);
      }
    
    }
////////////////
  
  updateBadgeformsubmit()
{
  const formData = new FormData();
  this.b = this.myGroup.value;
  /*
  formData.append('nbVoteYes',this.b.nbVoteYes.toString());
  formData.append('nbVoteNo',this.b.nbVoteNo.toString());
  formData.append('nbVoteABS',this.b.nbVoteABS.toString());
  formData.append('img',this.img);

  */

  console.log(this.b) ;

  
  if(this.myGroup.get('img').value == '')
  {
    formData.append('nbVoteYes',this.b.nbVoteYes.toString());
    formData.append('nbVoteNo',this.b.nbVoteNo.toString());
    formData.append('nbVoteABS',this.b.nbVoteABS.toString());
    formData.append('img',String(this.b_old.img));
    
  }
  else
  {
    formData.append('nbVoteYes',this.b.nbVoteYes.toString());
    formData.append('nbVoteNo',this.b.nbVoteNo.toString());
    formData.append('nbVoteABS',this.b.nbVoteABS.toString());
    formData.append('img',this.img);

    
  }

  this.badgeService.updateBadge(Number(this._activatedRoute.snapshot.paramMap.get('id')) ,formData)
    .subscribe((response)=>{ 
      this.router.navigate(['/badge'])
    },error=>{
      
    });

}
gotolist(){

  console.log('go back');
  this.router.navigate(['/badge']);
}
  
getFile(event: any): void{

  this.img = event.target.files[0];
  this.img_old = event.target.files[0];

}
}
 