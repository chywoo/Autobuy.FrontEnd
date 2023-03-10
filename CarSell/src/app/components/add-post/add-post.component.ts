import {Component, OnInit} from '@angular/core';
import {Post} from 'src/app/model/post.model';
import {Router} from '@angular/router';

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
  objPost: Post = new Post();

  constructor(private router: Router) {
  }

  conditions: Condition[] = [
    {value: 'excellent', viewValue: '1: EXCELLENT'},
    {value: 'fine', viewValue: '2: FINE'},
    {value: 'verygood', viewValue: '3: VERY GOOD'},
    {value: 'good', viewValue: '4: GOOD'},
    {value: 'restorable', viewValue: '5: RESTORABLE'},
  ];

  ngOnInit(): void {
  }

  public goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}

