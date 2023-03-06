import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Result, LoginIF, RoleIF} from "../interfaces/restapi.interface";

const BASEAPI = "/api/v1/roles";

@Injectable({
  providedIn: 'root'
})
export class RolessService {

  constructor(private http:HttpClient) { }

  /**
   * Get Role list
   */
  public getRoleList(): Observable<RoleIF[]> {
    let MAKERAPI = BASEAPI;
    return this.http.get<RoleIF[]>(MAKERAPI);
  }

  /**
   * Get Role by Id
   */
  public getRoleInfo(id:number): Observable<RoleIF> {
    let MAKERAPI = BASEAPI + "/" + id
    return this.http.get<RoleIF>(MAKERAPI);
  }
}
