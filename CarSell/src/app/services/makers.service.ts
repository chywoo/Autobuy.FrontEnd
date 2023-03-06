import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Result, LoginIF, MakerIF} from "../interfaces/restapi.interface";

const BASEAPI = "/api/v1/makers";

@Injectable({
  providedIn: 'root'
})
export class MakersService {

  constructor(private http:HttpClient) { }

  /**
   * Get Maker list
   */
  public getMakerList(): Observable<MakerIF[]> {
    let MAKERAPI = BASEAPI;
    return this.http.get<MakerIF[]>(MAKERAPI);
  }

  /**
   * Get Maker by Id
   */
  public getMakeInfo(id:number): Observable<MakerIF> {
    let MAKERAPI = BASEAPI + "/" + id
    return this.http.get<MakerIF>(MAKERAPI);
  }
}
