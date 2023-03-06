export class HomeSearch {
    make : any = null;
    model : any = null;
    minPrice : any = null;
    maxPrice : any = null;
    minYear : any = null;
    maxYear : any = null;
    color : any = null;
  

    constructor( make?:string ,model?: string, minPrice?:string, maxPrice?:string,minYear?:string,maxYear?:string,color?:string){
        this.make = make;
        this.model = model;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.minYear = minYear;
        this.maxYear = maxYear;
        this.color = color;


    }
}
