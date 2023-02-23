import { Component, OnInit } from '@angular/core';


export interface Element {

  car_make:string;
  car_model:string;
  car_price:string;
  car_description:string;
  post_author:string;
  position: number;
 
}
const ELEMENT_DATA: Element[] = [
  {position: 1, 
    car_make: 'Tesla',
    car_model:'Model3',
    car_price:'$30.000',
    car_description:'Very new! First owner',
    post_author:'Maria'}
  
  
];

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {

  displayedColumns: string[] = ['position', 'car_make','car_model','car_price', 'car_description','post_author', 'action'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }
 
  btnEdit(){
    alert("edit OK");
  }
  btnDelete(){
    alert("delete OK");
  }

}
