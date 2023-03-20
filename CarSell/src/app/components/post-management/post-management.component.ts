import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {PostDetailIF, PostIF, PostListIF} from "../../interfaces/restapi.interface";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";


export interface Element {
  post_id: number
  car_make:string;
  car_model:string;
  car_price:string;
  car_description:string;
  post_author:string;
  position: number;

}
const ELEMENT_DATA: Element[] = [];

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {

  displayedColumns: string[] = ['position', 'car_make','car_model','car_price', 'car_description','post_author', 'action'];
  dataSource: Element[] = [];
  pageSize: number;
  page: number;
  totalPosts: number;

  constructor(private postsService: PostsService, private router: Router) {
    this.pageSize = 10;
    this.page = 1;
    this.totalPosts = 0;
  }

  ngOnInit(): void {
    let userName = localStorage.getItem("userName");

    if (userName == null) {
      this.router.navigate(['/login']);
      return;
    }

    this.postsService.getPostList(this.pageSize, this.page, userName).subscribe((data:PostListIF) => {
      this.dataSource = []

      this.totalPosts = data.total;
      let posts : PostDetailIF[] = data.posts;

      for (let i = 0; i < posts.length; i++) {
        let post:Element = {
          post_id: posts[i].postID,
          position: i+1,
          car_make: posts[i].car.maker.makerName,
          car_model: posts[i].car.carModel,
          car_price: posts[i].price.toString(),
          car_description: posts[i].description,
          post_author: posts[i].author.fullName,
        }

        this.dataSource.push(post);
      }
    });
  }

  btnEdit(){
    alert("edit OK");
  }
  btnDelete(){
    alert("delete OK");
  }

  changePage(pageEvent: any) {
    this.pageSize = pageEvent.pageSize;
    this.page = pageEvent.pageIndex;
    console.log(pageEvent);
    this.ngOnInit();

  }
}
