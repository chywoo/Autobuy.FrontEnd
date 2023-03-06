import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {PostIF} from "../../interfaces/restapi.interface";


export interface Element {

  car_make:string;
  car_model:string;
  car_price:string;
  car_description:string;
  post_author:string;
  position: number;

}
const ELEMENT_DATA: Element[] = [
  {position: 1,
    car_make: 'Tesla',
    car_model:'Model3',
    car_price:'$30.000',
    car_description:'Very new! First owner',
    post_author:'Maria'}


];

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
    this.postsService.getPostList().subscribe((data:PostIF[]) => {
      this.dataSource = []

      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);

        let post:Element = {
          position: i+1,
          car_make: data[i].car.maker.makerName,
          car_model: data[i].car.carName,
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
