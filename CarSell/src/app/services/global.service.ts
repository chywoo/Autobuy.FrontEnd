import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  appName : string = 'CarsSell'
  developer: string = 'Maria , Sumin and Sungho'

  constructor() { }
}
