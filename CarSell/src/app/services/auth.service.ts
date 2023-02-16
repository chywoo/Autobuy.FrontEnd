import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Result, LoginIF} from "../interfaces/restapi.interface";

const AUTHAPI = "/api/v1/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  /**
   * Call login
   * @param user
   */
  public login(user: LoginIF): Observable<Result> {
    let LOGINAPI = AUTHAPI + "/login";
    return this.http.post<Result>(LOGINAPI, user);
  }
}
