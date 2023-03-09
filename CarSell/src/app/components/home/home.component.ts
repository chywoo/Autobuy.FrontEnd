import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/services/homeservice.service';
import { GlobalService } from 'src/app/services/global.service';
import { Make } from 'src/app/model/make.model';
import { HttpClient } from '@angular/common/http';
import { HomeSearch } from 'src/app/model/home.model';
import {MakersService} from "../../services/makers.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  objHome:HomeSearch = new HomeSearch();

  makers: Make[] = [];

  constructor( private http: HttpClient, private homeService : HomeserviceService,
               private makersService: MakersService, private router:Router){}

ngOnInit(): void {
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
  public goToPage(pageName:string):void {
   
        this.router.navigate([`${pageName}`]);
      } 
   
  }

