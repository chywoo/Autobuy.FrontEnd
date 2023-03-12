import {Component, OnInit} from '@angular/core';
import {HomeSearch} from "../../model/home.model";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";

export interface Card {
  title: string,
  description: string,
  buttonText: string,
  img: string
}

@Component({
  selector: 'app-post-seach',
  templateUrl: './post-seach.component.html',
  styleUrls: ['./post-seach.component.css']
})
export class PostSeachComponent implements OnInit {
  objHome: HomeSearch = new HomeSearch();

  myimage1: string = "assets/img/AlphaRomeo_4C.jpeg";
  myimage2: string = "assets/img/BMW_3series.jpeg" ;
  myimage3:string = "assets/img/Chevrolet_Corvette.jpeg";
  myimage4:string = "assets/img/Ford_F150.jpeg";
  myimage5:string = "assets/img/Genesis_G80.jpeg";
  myimage6:string = "assets/img/Honda_Civic.jpeg";
  myimage7:string = "assets/img/Hundai_Tucson.jpeg";
  myimage8:string = "assets/img/Hyundai_Casper.jpeg";

  cards:Card[] = [];

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    let maker=this.route.queryParams.subscribe(params => {
      this.objHome.make = params['make'];
      this.objHome.model = params['model'];
      this.objHome.year = params['year'];
      this.objHome.maxPrice = params['maxPrice'];

      console.log(this.objHome);
    });

    this.postsService.getPostList().subscribe( data => {
      this.cards = [];

      for (let i = 0; i < data.length; i++) {
        let card = {
          title: data[i].title,
          description: data[i].description,
          buttonText: 'Button',
          img: 'assets/img/' + data[i].car.imageURL
        };
        console.log(card);
        this.cards.push(card);
      }
    });
  }
}

