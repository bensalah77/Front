import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    
  auth2: any;
    
  @ViewChild('loginRef', {static: true }) loginElement!: ElementRef;
  constructor(public router:Router){}


  ngOnInit() {
     
    this.googleAuthSDK();
  }

    /**
   * Write code on Method
   *
   * @return response()
   */
     callLoginButton() {
     
      this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
        (googleAuthUser:any) => {
       
          let profile = googleAuthUser.getBasicProfile();
          console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
          console.log('ID: ' + profile.getId());
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail());
              
         /* Write Your Code Here */
      
        }, (error:any) => {
          alert(JSON.stringify(error, undefined, 2));
        });
   
    }
  
    /**
     * Write code on Method
     *
     * @return response()
     */
     googleAuthSDK() {
       
      (<any>window)['googleSDKLoaded'] = () => {
        (<any>window)['gapi'].load('auth2', () => {
          this.auth2 = (<any>window)['gapi'].auth2.init({
            client_id: '944665271576-ob7jh8m2ge1uj5us6uh1j5eqvv6hgj3g.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            scope: 'profile email'
          });
          this.callLoginButton();
        });
      }
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); 
        js.id = id;
        js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
        fjs?.parentNode?.insertBefore(js, fjs);
      }(document, 'script', 'google-jssdk'));
     
    }
}


