export class User {
   
    fname: string = ''; 
    lname: string = ''; 
    email: string = ''; 
    pwd: string = ''; 
    birthdate: Date = new Date(); 
    pic?: FormData; 
    type: Role = Role.Human_Ressource_Manager; 
}
enum Role{
    Human_Ressource_Manager,Simple_User,Sales_Manager,Partner
}

