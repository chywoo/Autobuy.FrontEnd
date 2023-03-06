import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {PostIF, Result} from "../interfaces/restapi.interface";


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
  public getPostList(): Observable<PostIF[]> {
    return this.http.get<PostIF[]>(POSTAPI);
  }

  /**
   * Get Post by Id
   * @param id
   */
  public getPostById(id: string): Observable<PostIF> {
    return this.http.get<PostIF>(POSTAPI + "/" + id);
  }

  /**
   * Update Post by Id
   */
  public updatePost(id: string, post: PostIF): Observable<Result> {
    return this.http.put<Result>(POSTAPI+ "/" + id, post);
  }


  /**
   * Delete Post by Id
   */
  public deletePost(id: string): Observable<Result> {
    return this.http.delete<Result>(POSTAPI + "/" + id);
  }
}
