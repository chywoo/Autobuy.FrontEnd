import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/services/homeservice.service';
import { GlobalService } from 'src/app/services/global.service';
import { Make } from 'src/app/model/make.model';
import { HttpClient } from '@angular/common/http';
import { HomeSearch } from 'src/app/model/home.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  objHome:HomeSearch = new HomeSearch(); 
  
  makers: Make[] = [];

  constructor( private http: HttpClient, private homeService : HomeserviceService){}

ngOnInit(): void {
this.homeService.getMaker().subscribe(data => {
  this.makers = data;
  console.log(data);
})
}
}
