import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {PostDetailIF, PostIF} from "../../interfaces/restapi.interface";


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

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPostList().subscribe((data:PostDetailIF[]) => {
      this.dataSource = []

      for (let i = 0; i < data.length; i++) {
        let post:Element = {
          post_id: data[i].postID,
          position: i+1,
          car_make: data[i].car.maker.makerName,
          car_model: data[i].car.carModel,
          car_price: data[i].price.toString(),
          car_description: data[i].description,
          post_author: data[i].author.fullName,
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

}
