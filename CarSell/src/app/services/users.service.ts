import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {UserIF, Result} from "../interfaces/restapi.interface";


const USERAPI = "/api/v1/users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  /**
   * Create User object
   * @param user
   */
  public createUser(user: UserIF): Observable<Result> {
    return this.http.post<Result>(USERAPI, user);
  }
  public getUserList(): Observable<Result> {
    return this.http.get<Result>(USERAPI);
  }
}
