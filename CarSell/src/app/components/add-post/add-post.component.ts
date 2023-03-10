import {Component, OnInit} from '@angular/core';
import {Post} from 'src/app/model/post.model';
import {Router} from '@angular/router';
import {Make} from "../../model/make.model";
import {MakersService} from "../../services/makers.service";
import {CarIF} from "../../interfaces/restapi.interface";
import {CarsService} from "../../services/cars.service";

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
  makers: Make[] = [];
  cars: CarIF[] = [];

  constructor(private router: Router, private makersService: MakersService, private carService: CarsService) {
  }

  conditions: Condition[] = [
    {value: 'excellent', viewValue: '1: EXCELLENT'},
    {value: 'fine', viewValue: '2: FINE'},
    {value: 'verygood', viewValue: '3: VERY GOOD'},
    {value: 'good', viewValue: '4: GOOD'},
    {value: 'restorable', viewValue: '5: RESTORABLE'},
  ];

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

    // Get all car list
    this.carService.getCarList().subscribe(data => {
      this.cars = [];

      for (let i = 0; i < data.length; i++) {
        let car:CarIF = {
          carID: data[i].carID,
          carModel: data[i].carModel,
          imageURL: data[i].imageURL,
          makerID: data[i].makerID,
          maker: data[i].maker,
        }

        this.cars.push(car);
      }
    });
  }

  public goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}

