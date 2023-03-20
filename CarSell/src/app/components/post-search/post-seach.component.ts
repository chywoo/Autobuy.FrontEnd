import {Component, OnInit,Injectable, NgModule} from '@angular/core';
import {HomeSearch} from "../../model/home.model";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {PostListIF} from "../../interfaces/restapi.interface";


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

    this.postsService.searchPostList().subscribe( (data:PostListIF) => {
      this.cards = [];

      let posts = data.posts;

      for (let i = 0; i < posts.length; i++) {
        let card = {
          title: posts[i].title,
          description: posts[i].description,
          buttonText: 'Button',
          img: 'assets/img/' + posts[i].car.imageURL
        };
        console.log(card);
        this.cards.push(card);
      }
    });
  }
}



