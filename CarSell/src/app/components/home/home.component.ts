import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/services/homeservice.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  developer : string ='';
  appName : string='';
  constructor(private globalservice:GlobalService){}
ngOnInit(): void {
  this.developer=this.globalservice.developer;
  this.appName=this.globalservice.appName;
}
}
