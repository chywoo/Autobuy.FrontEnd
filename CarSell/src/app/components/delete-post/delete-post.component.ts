import { Component, OnInit } from '@angular/core';
import {PostDetailIF, PostIF, Result} from 'src/app/interfaces/restapi.interface';
import { Post } from 'src/app/model/post.model';
import { PostsService } from 'src/app/services/posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  postId: number;
  objPost:Post = new Post();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService:PostsService) {
    this.postId = -1;
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id === null) {
      alert("Wrong access.");
      this.router.navigate(['/posts']);

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

  btnSubmitWorks(){
   this.postService.deletePost(this.postId).subscribe(
     (data: Result) => {
       if (data.result === "OK") {
         alert("Post deleted successfully.");
         this.router.navigate(['/posts']);
       } else {
         alert("Post deletion failed. " + data.message);
       }
     },
     (error) => {
       alert("Post deletion failed. " + error.error.message);
     }
   );
  }
}
