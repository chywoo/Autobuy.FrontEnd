import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Result, CarIF} from "../interfaces/restapi.interface";

const BASEAPI = "/api/v1/cars";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }

  /**
   * Get Car list
   */
  public getCarList(): Observable<CarIF[]> {
    let CARAPI = BASEAPI;
    return this.http.get<CarIF[]>(CARAPI);
  }

  /**
   * Get Car by Id
   */
  public getMakeInfo(id:number): Observable<CarIF> {
    let CARAPI = BASEAPI + "/" + id
    return this.http.get<CarIF>(CARAPI);
  }
}
