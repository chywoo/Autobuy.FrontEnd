import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {PostDetailIF, PostIF, PostListIF, Result} from "../../interfaces/restapi.interface";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";


export interface Element {
  post_id: number
  car_make:string;
  car_model:string;
  car_price:string;
  car_description:string;
  post_author:string;
  title:string;
  position: number;

}
const ELEMENT_DATA: Element[] = [];

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {

  displayedColumns: string[] = ['position', 'title', 'car_make','car_model','car_price', 'car_description','post_author','action'];
  dataSource: Element[] = [];
  pageSize: number;
  page: number;
  totalPosts: number;

  constructor(private authService:AuthService,
              private postsService: PostsService,
              private router: Router) {
    this.pageSize = 10;
    this.page = 0;
    this.totalPosts = 0;
  }

  ngOnInit(): void {

    // check local storage for user name and role id
    let userName: any = localStorage.getItem("userName");
    let roleID: any = localStorage.getItem("roleID");

    if (userName == null || roleID == null) {
      alert("Login required");
      this.router.navigate(['/login']);
      return;
    }

    // check if user is logged in
    this.authService.isLoggedIn().subscribe((result: Result) => {
      // only sellers can access this page
      if (roleID != "2") {
        alert("You are not authorized to access this page");
        this.router.navigate(['/']);
        return;
      }
      // if user is logged in, display posts
      this.displayPosts(userName);

    }, error => {
      alert("Login required");
      this.router.navigate(['/login']);
      return;
    });

  }

  private displayPosts(userName: string) {
    this.postsService.getPostList(this.pageSize, this.page, userName).subscribe((data: PostListIF) => {
      this.dataSource = []

      this.totalPosts = data.total;
      let posts: PostDetailIF[] = data.posts;

      for (let i = 0; i < posts.length; i++) {
        let post: Element = {
          post_id: posts[i].postID,
          position: i + 1,
          car_make: posts[i].car.make.makeName,
          car_model: posts[i].car.carModel,
          car_price: posts[i].price.toString(),
          car_description: posts[i].description,
          title:posts[i].title,
          post_author: posts[i].author.fullName,
        }

        this.dataSource.push(post);
      }
    }, error => {
      if (error.status == 403) {
        alert("You are not authorized to access this page");
        this.router.navigate(['/']);
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
