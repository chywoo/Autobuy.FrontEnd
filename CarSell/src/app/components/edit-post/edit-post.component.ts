import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  userName: string | null = null;
  objPost:Post = new Post();

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }
  
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.paramMap.get('id');
    /*if (this.userName != null) {
      this.userService.getUserById(this.userName).subscribe((data: UserIF) => {
        console.info(data);
        this.objPost.username = data.userName;
        this.objPost.name = data.fullName;
        this.objPost.email = data.email;
        this.objPost.password = data.password;
      });
    } else {
      console.error("Wrong user name.");
    }*/
  
  }
 
  btnSubmitWorks(){
    alert("edit works");
  }
}
