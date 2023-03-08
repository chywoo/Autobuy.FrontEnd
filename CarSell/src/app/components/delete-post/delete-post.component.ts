import { Component, OnInit } from '@angular/core';
import { PostIF } from 'src/app/interfaces/restapi.interface';
import { Post } from 'src/app/model/post.model';
import { PostsService } from 'src/app/services/posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
 
  postId:string | null = null;
  objPost : Post = new Post();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService:PostsService) {
  }

  

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
  }
 
  btnSubmitWorks(){
    alert("delete works");
  }
}
