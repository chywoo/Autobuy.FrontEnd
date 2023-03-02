import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  objPost:Post = new Post();
  constructor(private router: Router) {}
  
  ngOnInit(): void{}
  public goToPage(pageName:string) {
    this.router.navigate([`${pageName}`]);
  }
}

