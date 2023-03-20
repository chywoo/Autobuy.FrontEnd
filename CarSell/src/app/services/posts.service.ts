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
    return this.http.get<PostListIF>(POSTAPI + "?pageSize=" + pageSize + "&page=" + page + "&userName=" + userName + "&search=");
  }

  public searchPostList(): Observable<PostListIF> {
    return this.http.get<PostListIF>(POSTAPI);
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
