import { Component } from '@angular/core';

@Component({
  selector: 'app-post-seach',
  templateUrl: './post-seach.component.html',
  styleUrls: ['./post-seach.component.css']
})
export class PostSeachComponent {
  myimage1: string = "assets/img/AlphaRomeo_4C.jpeg";
  myimage2: string = "assets/img/BMW_3series.jpeg" ;
  myimage3:string = "assets/img/Chevrolet_Corvette.jpeg";
  myimage4:string = "assets/img/Ford_F150.jpeg";
  myimage5:string = "assets/img/Genesis_G80.jpeg";
  myimage6:string = "assets/img/Honda_Civic.jpeg";
  myimage7:string = "assets/img/Hundai_Tucson.jpeg";
  myimage8:string = "assets/img/Hyundai_Casper.jpeg";

  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: this.myimage1
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: this.myimage2
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: this.myimage3
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: this.myimage4
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: this.myimage5
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: this.myimage6
    },
    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: this.myimage7
    },
    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: this.myimage8
    },
    

  ];
}

