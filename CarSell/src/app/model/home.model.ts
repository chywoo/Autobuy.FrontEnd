export class HomeSearch {
    make : any = null;
    model : any = null;
    maxPrice : any = null;
    year : any = null;
  

    constructor( make?:string ,model?: string, maxPrice?:number,year?:number){
        this.make = make;
        this.model = model;
        this.maxPrice = maxPrice;
        this.year = year;

    }
}
