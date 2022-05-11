import { Tchat } from "./tchat.model";

export class User {
    id:number=0;
    fname: string = ''; 
    lname: string = ''; 
    email: string = ''; 
    pwd: string = ''; 
    birthdate: Date = new Date(); 
    pic?: FormData; 
    type: Role = Role.Human_Ressource_Manager; 
    tchatR:Tchat[]=[];
    tchatS:Tchat[]=[];

}
enum Role{
    Human_Ressource_Manager,Simple_User,Sales_Manager,Partner
}

