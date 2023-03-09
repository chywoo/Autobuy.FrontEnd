import { Component } from '@angular/core';

@Component({
  selector: 'app-post-seach',
  templateUrl: './post-seach.component.html',
  styleUrls: ['./post-seach.component.css']
})
export class PostSeachComponent {
  myimage1: string = "assets/img/AlphaRomeo_4C.jpeg";
  myimage2: string = "assets/img/BMW_3series.jpeg" 
 

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
    

  ];
}

