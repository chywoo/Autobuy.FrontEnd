import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Result, LoginIF, MakeIF} from "../interfaces/restapi.interface";

const BASEAPI = "/api/v1/makes";

@Injectable({
  providedIn: 'root'
})
export class MakesService {

  constructor(private http:HttpClient) { }

  /**
   * Get Maker list
   */
  public getMakeList(): Observable<MakeIF[]> {
    let MAKERAPI = BASEAPI;
    return this.http.get<MakeIF[]>(MAKERAPI);
  }

  /**
   * Get Maker by Id
   */
  public getMakeInfo(id:number): Observable<MakeIF> {
    let MAKERAPI = BASEAPI + "/" + id
    return this.http.get<MakeIF>(MAKERAPI);
  }
}
