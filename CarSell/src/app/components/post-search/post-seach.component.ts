import {Component, OnInit,Injectable, NgModule} from '@angular/core';
import {HomeSearch} from "../../model/home.model";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {PostListIF} from "../../interfaces/restapi.interface";
import {Observable} from "rxjs";


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
  pageSize = 10;
  page = 1;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    let maker=this.route.queryParams.subscribe(params => {
      this.objHome.make = params['make'];
      this.objHome.model = params['model'];
      this.objHome.maxPrice = params['maxPrice'];
      this.objHome.year = params['year'];

      console.log(this.objHome);
    });

    this.postsService.searchPostList(this.pageSize, this.page,  this.objHome.make, this.objHome.model, this.objHome.maxPrice, this.objHome.year)
      .subscribe( (data:PostListIF) => {
      this.cards = [];

      let posts = data.posts;

      for (let i = 0; i < posts.length; i++) {
        let card = {
          title: posts[i].title,
          description: posts[i].description,
          buttonText: 'Button',
          img: 'assets/img/' + posts[i].car.imageURL
        };
        this.cards.push(card);
      }
    });
  }

  changePage(pageEvent: any) {
    this.pageSize = pageEvent.pageSize;
    this.page = pageEvent.pageIndex;
    this.ngOnInit();
  }
}



