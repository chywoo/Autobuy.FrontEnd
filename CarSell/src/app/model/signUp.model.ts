export class User {
    name : any = null;
    username : any = null;
    email : any = null;
    password : any = null;
    passwordAgain : any = null;
    roleID : any = null;
    //roll

    constructor( name?:string ,userName?: string, email?:string, password?:string,passwordAgain?:string, roleID?:string){
        this.name = name;
        this.username = userName;
        this.email = email;
        this.password = password;
        this.passwordAgain = passwordAgain;
        this.roleID = roleID;


    }
}
