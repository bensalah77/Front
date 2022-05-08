import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Badge } from '../model/badge';
import { BadgeeService } from '../services/badgee.service';

@Component({
  selector: 'app-vote-badgecomponent',
  templateUrl: './vote-badgecomponent.component.html',
  styleUrls: ['./vote-badgecomponent.component.scss']
})
export class VoteBadgecomponentComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(@Inject(MAT_DIALOG_DATA) 
              private data: any,
              private thisDg: MatDialogRef<VoteBadgecomponentComponent>)
  { }

  
/*  
  //Form Validables 
  voteForm:any =  FormGroup;
  submitted = false;
  b: Badge = new Badge();
  current_id: any;


  constructor(private formBuilder: FormBuilder ,private badgeService : BadgeeService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.b.id = this.activatedRoute.snapshot.params['id'];
    this.current_id = this.b.id;

           //Add Badge form validations 
           this.voteForm = this.formBuilder.group({
            nbVoteYes: ['', [Validators.required]],
            nbVoteNo: ['', [Validators.required]],
            nbVoteABS: ['', [Validators.required]],
          
          });
  }

  voteBadge() {
  

    const formData = new FormData();
    this.b = this.voteForm.value;
    formData.append('nbVoteYes',this.b.nbVoteYes.toString());
    formData.append('nbVoteNo',this.b.nbVoteNo.toString());
    formData.append('nbVoteABS',this.b.nbVoteABS.toString());
  
    console.log(this.b) ;
  
    this.badgeService.voteBadge(this.current_id,this.voteForm)
      .subscribe((response)=>{ 
       //this.router.navigate(['/badge'])
      },error=>{
        
      });
  
  }

  //vote badge form actions
  get f() { return this.voteForm.controls; }

  onSubmit() {
    
    // stop here if form is invalid
    if (this.voteForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
     // alert("Great!!");
      this.router.navigate(['/badge']);
    }
  
  }
  */

}
