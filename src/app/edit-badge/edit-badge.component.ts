import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id?: number;

  //Form Validables 
  img: any = null;
  myGroup:any =  FormGroup;   
  submitted = false;


  constructor(private formBuilder: FormBuilder ,
    private badgeService : BadgeeService,
    private router: Router,
    private _activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    let id = this._activatedRoute.snapshot.paramMap.get('id');
  //  this.badgeService.getBadgeById(id).subscribe();   ///////////TO DO

          //Add Badge form validations 
          this.myGroup = this.formBuilder.group({
            nbVoteYes: ['', [Validators.required]],
            nbVoteNo: ['', [Validators.required]],
            nbVoteABS: ['', [Validators.required]],
          
          });
  }

    //Add badge form actions
    get f() { return this.myGroup.controls; }
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
  formData.append('nbVoteYes',this.b.nbVoteYes.toString());
  formData.append('nbVoteNo',this.b.nbVoteNo.toString());
  formData.append('nbVoteABS',this.b.nbVoteABS.toString());
  //formData.append('img',this.img);

  console.log(this.b) ;

  this.badgeService.addBadge(formData)
    .subscribe((response)=>{ 
     // this.router.navigate(['/badge'])
    },error=>{
      
    });

}
gotolist(){
  console.log('go back');
  this.router.navigate(['/badge']);
}
  
////////////////
}
