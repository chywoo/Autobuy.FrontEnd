import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/services/homeservice.service';
import { GlobalService } from 'src/app/services/global.service';

export interface Brand {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  brands: Brand[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
ngOnInit(): void {
  
}
}
