import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { PostDetailIF } from 'src/app/interfaces/restapi.interface';



@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})


export class CarDetailsComponent implements OnInit {

  //myimage1: string = 'assets/img/' + id.car.imageURL;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postsService: PostsService) {
  }
  //postId: number;
  objPost:Post = new Post();

  ngOnInit(): void {
    let id  = this.activatedRoute.snapshot.paramMap.get('id');



    if (id != null) {
      this.postsService.getPostById(parseInt(id)).subscribe((data: PostDetailIF) => {
        console.info(data);
        this.objPost.title = data.title;
        this.objPost.model = data.car.carModel;
        this.objPost.year = data.year;
        this.objPost.mileage = data.mileage;
        this.objPost.condition = data.condition;
        this.objPost.price = data.price;
        this.objPost.description = data.description;       
      });
    } else {
      console.error("Wrong user name.");
    }
    


  }
}

