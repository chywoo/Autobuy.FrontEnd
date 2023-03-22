import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostDetailIF, PostIF, PostListIF, Result} from "../interfaces/restapi.interface";


const POSTAPI = "/api/v1/posts";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  /**
   * Create Post object
   * @param post
   */
  public createPost(post: PostIF): Observable<Result> {
    return this.http.post<Result>(POSTAPI, post);
  }

  /**
   * Get Post List
   */
  public getPostList(pageSize: number, page: number, userName: string): Observable<PostListIF> {
    return this.http.get<PostListIF>(POSTAPI + "?pageSize=" + pageSize + "&page=" + page + "&userName=" + userName);
  }

  public searchPostList(pageSize: number, page: number, make:number, model:number, maxPrice:number, minYear:number): Observable<PostListIF> {
    let search = "";

    if (make != undefined) {
      search += "&makeID=" + make;
    }

    if (model != undefined) {
      search += "&carModel=" + model;
    }

    if (maxPrice != undefined) {
      search += "&maxPrice=" + maxPrice;
    }

    if (minYear != undefined) {
      search += "&minYear=" + minYear;
    }

    return this.http.get<PostListIF>(POSTAPI + "?pageSize=" + pageSize + "&page=" + page + search);
  }


  /**
   * Get Post by Id
   * @param id
   */
  public getPostById(id: number): Observable<PostDetailIF> {
    return this.http.get<PostDetailIF>(POSTAPI + "/" + id);
  }

  /**
   * Update Post by Id
   */
  public updatePost(id: number, post: PostIF): Observable<Result> {
    return this.http.put<Result>(POSTAPI+ "/" + id, post);
  }

  /**
   * Delete Post by Id
   */
  public deletePost(id: number): Observable<Result> {
    return this.http.delete<Result>(POSTAPI + "/" + id);
  }
}
