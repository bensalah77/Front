import { User } from './../../model/user.model';
import { UserService } from './../../user-profile/_service/user.service';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES, ROUTES_ADMIN } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  user: User = new User();
  public sidebarnavItems:RouteInfo[]=[];
  // this is for the open close
  addExpandClass(element: string) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private userService: UserService
  ) {}

  // End open close
  ngOnInit() {
    this.userService.getUserDetails()
    .subscribe((data)=>{
      this.user = data;
     
     
      if(data.type  == 'Human_Ressource_Manager'){
        this.sidebarnavItems = ROUTES_ADMIN.filter(sidebarnavItem => sidebarnavItem);
      }else if( data.type == 'Simple_User'||data.type == 'Sales_Manager'){
        this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
      }
    },error=>{
      alert('Erreur => '+ error.error)
    })
  }
}
