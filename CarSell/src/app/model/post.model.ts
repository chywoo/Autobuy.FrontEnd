
export class Post {
    make : any = null;
    model : any = null;
    year : any = null;
    price : any =null;
    description:any =null;
    username : any = null;
    email :any = null;
    mileage:any=null; 
    condition:any =null;

    constructor( make?:string ,model?: string, username?:string, year?:string,price?:number,description?:string, email?:string, mileage?:number,condition?:string){
        this.make = make;
        this.username = username;
        this.model = model;
        this.year = year;
        this.price =price;
        this.description=description;
        this.email = email;
        this.mileage = mileage;
        this.condition = condition;

    }
}
