export class LoginModel {
    username : any = null;
    password : any = null;

    constructor( userName?: string, password?:string){
        this.username = userName;
        this.password = password;
    }
}