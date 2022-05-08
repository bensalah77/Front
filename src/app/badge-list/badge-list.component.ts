import { Component, OnInit } from '@angular/core';
import { BadgeeService } from '../services/badgee.service';
import { Badge } from '../model/badge';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

//import { BadgeService } from '../services/badge.service';




@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.scss']
})
export class BadgeListComponent implements OnInit {

  badge?: Badge[];
  hidden : boolean = true;
  b: Badge = new Badge();

  //Form Validables 
  img: any = null;
  myGroup:any =  FormGroup;   
  submitted = false;


  
  constructor(private formBuilder: FormBuilder ,
              private badgeService : BadgeeService,
              private router: Router,
              private _sanitizer : DomSanitizer
           ) 
              { }

  ngOnInit(): void {

    this.badgeService.refreshNeeded$
          .subscribe(() => 
          this.getBadges()
          );

    this.hidden = true
    this.getBadges(); 
    this.b = new Badge();

       //Add Badge form validations 
    this.myGroup = this.formBuilder.group({
      nbVoteYes: ['', [Validators.required]],
      nbVoteNo: ['', [Validators.required]],
      nbVoteABS: ['', [Validators.required]],
      img: ['', [Validators.required]],
    
    });
  }

  getBadges()
  { 
   /*
    this.badgeService.getBadges().subscribe(
        (badge: Badge[]) => this.badge = badge
    ); 
   */
    this.badgeService.getBadges().subscribe((data: Badge[]) => (this.badge = data).forEach(p => { console.log(p.img) })); 
  }

    convert(base64String : any) {
      return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
    }
 


  deleteBadge(idBadge: number){
    console.log(idBadge);
    this.badgeService.removeBadge(idBadge).subscribe(
      data => 
      {
        
        console.log(data);
        this.badgeService.getBadges();
        
        this.router.navigate(['/badge']);
       
      },
      
      error => console.log(error)
      

    );
    
}

//redirect to add form
showForm(){
  this.hidden = false;

}
hideForm() {
  this.hidden = true;
}


addBadge() {
  

  const formData = new FormData();
  this.b = this.myGroup.value;
  formData.append('nbVoteYes',this.b.nbVoteYes.toString());
  formData.append('nbVoteNo',this.b.nbVoteNo.toString());
  formData.append('nbVoteABS',this.b.nbVoteABS.toString());
  formData.append('img',this.img);

  console.log(this.b) ;

  this.badgeService.addBadge(formData)
    .subscribe((response)=>{ 
     // this.router.navigate(['/badge'])
    },error=>{
      
    });
  this.hidden = true
  

}

getFile(event: any): void{

  this.img = event.target.files[0];
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


  voteBadgeRecord(id?: number)
  {
    console.log("id= ", id);
   // this.badgeService.getId(id);  /////////////TO DO

  }

  goToEditBadge(id?: number){
    console.log("id", id);
    this.router.navigate(['/badge/edit/',id]);

  }

  goToVoteBadge(id?: number){
    console.log("id", id);
    this.router.navigate(['/badge/vote/',id]);
  }

  popUpVoteBadge(data: any)
  {}
  /*
  popUpVoteBadge(data: any)
  {
    this.dg.open(VoteBadgecomponentComponent,{
      data : {
        data : data
      }
    }).afterClosed().subscribe(()=>{
      this.getBadges();
    })
  }
  */





}
