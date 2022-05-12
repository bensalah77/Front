import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Partner } from '../model/partner.model';
import { ServicepartnerService } from '../services/servicepartner.service';

@Component({
  selector: 'app-list-partner',
  templateUrl: './list-partner.component.html',
  styleUrls: ['./list-partner.component.scss']
})
export class ListPartnerComponent implements OnInit {

  form! : FormGroup;
  partner? : Partner[];
  p : Partner = new Partner();
  selectedFile! : File;
  imagePreview : any;
  name : any ;
  hidden : boolean = true;  
  submitted = false;




  constructor(private router: Router,
   
    private partner_service : ServicepartnerService
  ) { }

  ngOnInit(): void {
   
    
    this.partner_service.refreshNeeded$
    .subscribe(() => 
    {
      this.getPartners()
    console.log(this.partner)
    }
    
    );
    this.getPartners()
    this.form = new FormGroup({
      name : new FormControl('',[Validators.required]),
      address : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      num_tel : new FormControl('',[Validators.required]),
    });
    this.hidden = true
  }
  addPartner() {

    const formData = new FormData();
    this.p = this.form.value;
    formData.append('name',this.p.name);
    formData.append('address',this.p.address);
    formData.append('email',this.p.email);  
    formData.append('num_tel',this.p.num_tel.toString());
    

    console.log(this.p) ;
  
    this.partner_service.addPartner(formData)
      .subscribe((response)=>{ 
       // this.router.navigate(['/partner'])
      },error=>{
        
      });
    this.hidden = true
    
  }

  deletePartner(id: number)
  {
    console.log(id);
    this.partner_service.removePartner(id).subscribe(
      data => 
      {
        
        console.log(data);
        this.partner_service.getPartners();
        
        this.router.navigate(['/partner']);
       
      },
      
      error => console.log(error)
      

    ); 
  }


  //Add badge form actions
  get f() { return this.form.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
     // alert("Great!!");
      this.router.navigate(['/partner']);
    }
  
  }


  getPartners()
  { 
    
     this.partner_service.getPartners().subscribe((data: Partner[]) => (this.partner = data)); 
   }

   Search() {
     if (this.name == ""){
       this.ngOnInit();
     }else {
       this.partner = this.partner?.filter(res=>{
         return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
       })
     }
   }
   
  
   //redirect to add form
showForm(){
  this.hidden = false;

} 
hideForm() {
  this.hidden = true;
}


}
