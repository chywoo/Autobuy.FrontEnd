import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Make } from "../model/make.model";

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private http: HttpClient){}
  getMaker(){
    return this.http.get<Make[]>('assets/data/makers.json')
}
}
