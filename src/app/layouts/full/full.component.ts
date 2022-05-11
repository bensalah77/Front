import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../model/user.model";
import { UserService } from "../../user-profile/_service/user.service";

//declare var $: any;

@Component({
  selector: "app-full-layout",
  templateUrl: "./full.component.html",
  styleUrls: ["./full.component.scss"],
})
export class FullComponent implements OnInit {
  users=new User;
  type:String="";
  constructor(public router: Router,private _userService: UserService) {}
  public isCollapsed = false;
  public innerWidth: number = 0;
  public defaultSidebar: string = "";
  public showMobileMenu = false;
  public expandLogo = false;
  public sidebartype = "full";

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    if (this.router.url === "/a") {
      this.router.navigate(["/login"]);
    }
    this.defaultSidebar = this.sidebartype;
    this.handleSidebar();
    this._userService.getUserDetails()
    .subscribe((response:any)=>{
      this.users = response
      
      this.type=response.type;
        
      console.log(this.users);
      
     
    }
    )
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.sidebartype = "full";
    } else {
      this.sidebartype = this.defaultSidebar;
    }
  }

  toggleSidebarType() {
    switch (this.sidebartype) {
      case "full":
        this.sidebartype = "mini-sidebar";
        break;

      case "mini-sidebar":
        this.sidebartype = "full";
        break;

      default:
    }
  }
}
