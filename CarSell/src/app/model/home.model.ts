export class HomeSearch {
    make : any = null;
    model : any = null;
    maxPrice : any = null;
    year : any = null;
    postId : any = null;


    constructor( postId?: number, make?:string ,model?: string, maxPrice?:number,year?:number){
        this.postId = postId;
        this.make = make;
        this.model = model;
        this.maxPrice = maxPrice;
        this.year = year;
    }
}
