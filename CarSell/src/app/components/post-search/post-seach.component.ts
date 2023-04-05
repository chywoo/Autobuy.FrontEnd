import {Component, OnInit,Injectable, NgModule} from '@angular/core';
import {HomeSearch} from "../../model/home.model";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {PostListIF} from "../../interfaces/restapi.interface";
import {Observable} from "rxjs";
import { Router } from '@angular/router';

export interface Card {
  title: string,
  postId: number,
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
  pageSize = 8;
  page = 0;
  total = 0;

  constructor(private route: ActivatedRoute, private postsService: PostsService,  private router_: Router) { }

  ngOnInit(): void {
    let make=this.route.queryParams.subscribe(params => {
      this.objHome.make = params['make'];
      this.objHome.model = params['model'];
      this.objHome.maxPrice = params['maxPrice'];
      this.objHome.year = params['year'];

      console.log(this.objHome);
    });

    this.postsService.searchPostList(this.pageSize, this.page,  this.objHome.make, this.objHome.model, this.objHome.maxPrice, this.objHome.year)
      .subscribe( (data:PostListIF) => {
      this.cards = [];
      this.total = data.total;

      let posts = data.posts;

      for (let i = 0; i < posts.length; i++) {
        let card = {
          title: posts[i].title.substring(0, 20),
          description: posts[i].description.substring(0, 200),
          buttonText: 'Button',
          img: 'assets/img/' + posts[i].car.imageURL,
          postId: posts[i].postID
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

   SeeDetails(id:number): void {
    this.router_.navigate(['/carDetails' , `${id}`]);
  }

}
