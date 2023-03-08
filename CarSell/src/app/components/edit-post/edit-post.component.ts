import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import {ActivatedRoute, Router} from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { PostIF } from 'src/app/interfaces/restapi.interface';
import { PostDetailIF } from 'src/app/interfaces/restapi.interface';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  postId: string | null = null;
  objPost:Post = new Post();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService:PostsService) {
  }
  
  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.postId != null) {
      this.postService.getPostById(this.postId).subscribe((data: PostDetailIF) => {
        console.info(data);

        this.objPost.make = data.car.maker.makerName;
        this.objPost.model = data.car.carModel;
        this.objPost.year = data.year;
        this.objPost.mileage = data.mileage;
        this.objPost.condition = data.condition;
        this.objPost.description = data.description;
        this.objPost.username = data.userName;
      });
    } else {
      console.error("Wrong user name.");
    }
  
  }
 
  btnSubmitWorks(){
    /*let postInf: PostIF = {
      postID: this.postId,//post id = string but in the interface is number 
      title: "", // what is title ?  it does not exist in the model 
      description: this.objPost.description,
      year: this.objPost.year,
      mileage: this.objPost.mileage,
      condition: this.objPost.condition,
      price: this.objPost.price,
      userName: this.objPost.username,
      carID: //how to get the car id ?
    
    }
    this.postService.updatePost(this.objPost.username, postInf).subscribe((result)=>{
      if(result.result == "OK"){
        this.router.navigate(['/postManagement']);
      }else{
        alert("Update user failed.");
      }
    } )*/
  }
}
