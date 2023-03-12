import {Component, OnInit} from '@angular/core';
import {HomeserviceService} from 'src/app/services/homeservice.service';
import {GlobalService} from 'src/app/services/global.service';
import {Make} from 'src/app/model/make.model';
import {HttpClient} from '@angular/common/http';
import {HomeSearch} from 'src/app/model/home.model';
import {MakersService} from "../../services/makers.service";
import {Router} from '@angular/router';
import {CarsService} from "../../services/cars.service";
import {CarIF} from "../../interfaces/restapi.interface";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objHome: HomeSearch = new HomeSearch();

  makers: Make[] = [];
  cars: CarIF[] = [];
  prices: number[] = [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 50000, 100000, 200000];
  years: number[] = [...Array(24)].map((_, i) => 2000 + i);

  constructor(private http: HttpClient,
              private homeService: HomeserviceService,
              private makersService: MakersService,
              private carService: CarsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.showMakerList();
    this.showAllCarModelList();
  }

  private showMakerList() {
    this.makersService.getMakerList().subscribe(
      data => {
        this.makers = [];
        for (let i = 0; i < data.length; i++) {
          let maker = {
            id: data[i].makerID,
            name: data[i].makerName
          }
          this.makers.push(maker);
        }
      },
      error => {
        if (error.status === 504) {
          alert('API Server Unavailable.\nPlease be sure to start the API server before running the app.');
        }
      }
    );
  }

  private showAllCarModelList() {
    this.carService.getCarList().subscribe(
      data => {
        this.cars = data;
      },
      error => {
        if (error.status === 504) {
          alert('API Server Unavailable.\nPlease be sure to start the API server before running the app.');
        }
      }
    );
  }

  public goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`], {queryParams: this.objHome});
  }

  onChange(value:any) {
    this.cars = [];

    // get the selected maker's car model list
    this.carService.getCarListForMake(value.target.value).subscribe(
      data => {
        this.cars = data;
      }
    );
  }
}

