
export class Post {
    make : any = null;
    model : any = null;
    year : any = null;
    color : any = null;
    description:any =null;
    username : any = null;
    email :any = null;
    mileage:any=null; 
    condition:any =null;

    constructor( make?:string ,model?: string, username?:string, year?:string,color?:string,description?:string, email?:string, mileage?:number,condition?:string){
        this.make = make;
        this.username = username;
        this.model = model;
        this.year = year;
        this.color = color;
        this.description=description;
        this.email = email;
        this.mileage = mileage;
        this.condition = condition;

    }
}
