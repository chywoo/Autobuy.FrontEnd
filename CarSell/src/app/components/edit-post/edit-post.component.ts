import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import {ActivatedRoute, Router} from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import {PostIF, Result} from 'src/app/interfaces/restapi.interface';
import { PostDetailIF } from 'src/app/interfaces/restapi.interface';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  postId: number;
  objPost:Post = new Post();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService:PostsService) {
    this.postId = -1;
  }

  ngOnInit(): void {
    let id  = this.activatedRoute.snapshot.paramMap.get('id');

    if(id === null) {
      alert("Wrong access.");
      this.router.navigate(['/postManagement']);

    } else {
      this.postId = +id;
    }

    if (this.postId != null) {
      this.postService.getPostById(this.postId).subscribe((data: PostDetailIF) => {
        this.objPost.postID = data.postID;
        this.objPost.make = data.car.maker.makerName;
        this.objPost.model = data.car.carModel;
        this.objPost.year = data.year;
        this.objPost.mileage = data.mileage;
        this.objPost.title = data.title;
        this.objPost.condition = data.condition;
        this.objPost.description = data.description;
        this.objPost.username = data.userName;
        this.objPost.price = data.price;
        this.objPost.carID = data.carID;
      });
    } else {
      console.error("Wrong user name.");
    }

  }

  btnSubmitWorks() {
    console.log("Call update");

    let postInf: PostIF = {
      postID: this.postId,
      title: this.objPost.title,
      description: this.objPost.description,
      year: this.objPost.year,
      mileage: this.objPost.mileage,
      condition: this.objPost.condition,
      price: this.objPost.price,
      userName: this.objPost.username,
      carID: this.objPost.carID
    }

    this.postService.updatePost(this.objPost.postID, postInf).subscribe(
      (result)=>{
        this.router.navigate(['/posts']);
        alert("Updated successfully.");
      },
      (error) => {
      alert(error.error.message);
    } )
  }
}
