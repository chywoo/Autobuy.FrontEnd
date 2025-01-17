import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {UserIF, Result, UserDetailIF, UserListIF} from "../interfaces/restapi.interface";


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

  /**
   * Get User List
   */
  public getUserList(pageSize: number, page: number): Observable<UserListIF> {
    return this.http.get<UserListIF>(USERAPI + "?pageSize=" + pageSize + "&page=" + page);
  }

  /**
   * Get User by Id
   * @param userName
   */
  public getUserById(userName: string): Observable<UserDetailIF> {
    return this.http.get<UserDetailIF>(USERAPI + "/" + userName);
  }

  /**
   * Update User
   */
  public updateUser(userName: string, user: UserIF): Observable<Result> {
    return this.http.put<Result>(USERAPI+ "/" + userName, user);
  }


  /**
   * Delete User
   */
  public deleteUser(userName: string): Observable<Result> {
    return this.http.delete<Result>(USERAPI + "/" + userName);
  }
}
