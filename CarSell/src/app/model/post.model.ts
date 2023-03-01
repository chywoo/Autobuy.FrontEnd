
export class Post {
    make : any = null;
    model : any = null;
    year : any = null;
    color : any = null;
    username : any = null;

    constructor( make?:string ,model?: string, username?:string, year?:string,color?:string){
        this.make = make;
        this.username = username;
        this.model = model;
        this.year = year;
        this.color = color;

    }
}
