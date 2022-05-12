import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publication } from '../model/publication.model';
import { PublicationserviceService } from '../service/publicationservice.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  hidden : boolean = true;
  submitted = false;
  pubs: Publication[] = [];
  loginForm:any =  FormGroup;  
  p: Publication = new Publication();
  postContent:any;

  constructor(private formBuilder: FormBuilder,private publicationService:PublicationserviceService, 
    private router: Router) { }

  ngOnInit(): void {

    this.hidden = true

    //refresh data
    this.publicationService.refreshNeeded$
          .subscribe(() => 
          this.getPublications()
          );

    this.getPublications();

    //build the form for add method
    this.loginForm = this.formBuilder.group({
      postContent: ['', [Validators.required]],
      usefulLinks: ['', [Validators.required]],
    
    });
  }
  //ajout
  getPublications()
  { 
    this.publicationService.getPublications().subscribe((data: Publication[]) => (this.pubs = data) );
  }
/*
  deleteBadge(idBadge: number){
    console.log(idBadge);
    this.publicationService.removeBadge(idBadge).subscribe(
      data => 
      {    
      },
      
      error => console.log(error)
      

    );   
}*/

deletePub(id: number){
  console.log(id);
  this.publicationService.removeBadge(id).subscribe(
    data => 
    {
      
      console.log(data);
      this.publicationService.getPublications();
      
      this.router.navigate(['/pub']);
     
    },
    
    error => console.log(error)
    

  );   
}


  publications(loginForm: FormData) {

    const formData = new FormData();
  this.p = this.loginForm.value;
  formData.append('postContent',this.p.postContent);
  formData.append('usefulLinks',this.p.usefulLinks.toString());

  console.log(this.p) ;

  this.publicationService.addPub(formData)
    .subscribe((response)=>{ 
     // this.router.navigate(['/badge'])
    },error=>{
      
    });
  this.hidden = true
    /*
    this.publicationService.addPub(loginForm).subscribe(
      (response: any) => {
        
       
       
          this.router.navigate(['/publication']);
       
      },
      (error: any) => {
        console.log(error);
      }
    );

     */
  }


  //show - hide form ajout
  showForm(){
    this.hidden = false;
  
  }
  hideForm() {
    this.hidden = true;
  }

    //Add badge form actions
    get f() { return this.loginForm.controls; }
    onSubmit() {
      
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      //True if all the fields are filled
      if(this.submitted)
      {
       // alert("Great!!");
        this.router.navigate(['/publication']);
      }
    
    }

    Search() {
      if (this.postContent == ""){
        this.ngOnInit();
      }else {
        this.pubs = this.pubs?.filter(res=>{
          return res.postContent.toLocaleLowerCase().match(this.postContent.toLocaleLowerCase());
        })
      }
    }
}
