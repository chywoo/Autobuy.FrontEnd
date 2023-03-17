import {Component, OnInit} from '@angular/core';
import {NewPost, Post} from 'src/app/model/post.model';
import {Router} from '@angular/router';
import {Make} from "../../model/make.model";
import {MakersService} from "../../services/makers.service";
import {CarIF} from "../../interfaces/restapi.interface";
import {CarsService} from "../../services/cars.service";
import {PostsService} from "../../services/posts.service";
import {AuthService} from "../../services/auth.service";

export interface Condition {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  objPost: NewPost = new NewPost();
  makers: Make[] = [];
  cars: CarIF[] = [];

  prices: number[] = [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 50000, 100000, 200000];
  years: number[] = [...Array(24)].map((_, i) => 2000 + i);

  constructor(private router: Router,
              private makersService: MakersService,
              private carService: CarsService,
              private postsService: PostsService,
              private authService: AuthService) {
  }

  conditions: Condition[] = [
    {value: 'excellent', viewValue: '1: EXCELLENT'},
    {value: 'fine', viewValue: '2: FINE'},
    {value: 'verygood', viewValue: '3: VERY GOOD'},
    {value: 'good', viewValue: '4: GOOD'},
    {value: 'restorable', viewValue: '5: RESTORABLE'},
  ];

  ngOnInit(): void {

    this.authService.isLoggedIn().subscribe(data => {
        let value : any = localStorage.getItem('userName');

        // if fail to get userName from localStorage, redirect to login page
        if (value === null) {
          alert('You are not logged in. Please login first.');
          this.router.navigate(['/login']);
        } else {
          // set userName to the post object
          this.objPost.userName = value.toString();
        }
      },
      error => {
        // if 401 Unauthorized, redirect to login page
        if (error.status === 401) {
          alert('You are not logged in. Please login first.');
          this.router.navigate(['/login']);
        }
      });

    this.makersService.getMakerList().subscribe(data => {
      this.makers = [];
      for (let i = 0; i < data.length; i++) {
        let maker = {
          id: data[i].makerID,
          name: data[i].makerName
        }
        this.makers.push(maker);
      }
    });
  }

  onChange(value: any) {
    this.cars = [];

    // get the selected maker's car model list
    this.carService.getCarListForMake(value.target.value).subscribe(
      data => {
        this.cars = data;
      }
    );
  }

  public submit(pageName: string) {
    this.postsService.createPost(this.objPost).subscribe( data => {
      alert("Post created successfully.")

      this.router.navigate(["/posts"]);
    },
    error => {
      alert(error.error.message);
    });
  }
}
