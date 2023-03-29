import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from 'src/app/model/post.model';
import {PostsService} from 'src/app/services/posts.service';
import {PostDetailIF} from 'src/app/interfaces/restapi.interface';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})


export class CarDetailsComponent implements OnInit {
  post: PostDetailIF | any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postsService: PostsService) {
    this.post = null;
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');


    if (id != null) {
      this.postsService.getPostById(parseInt(id)).subscribe((data: PostDetailIF) => {
        console.info(data);
        this.post = data;

      });
    } else {
      console.error("error");
    }
  }
}

