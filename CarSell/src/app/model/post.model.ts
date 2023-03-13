import {PostIF} from "../interfaces/restapi.interface";

export class Post {
  postID: any = null;
  make: any = null;
  model: any = null;
  year: any = null;
  price: any = null;
  title: any = null;
  description: any = null;
  username: any = null;
  email: any = null;
  mileage: any = null;
  condition: any = null;
  carID: any = null;

  constructor(postID?: number, make?: string, model?: string, username?: string,
              year?: string, price?: number, title?: string, description?: string,
              email?: string, mileage?: number,
              condition?: string, carID?: number) {
    this.postID = postID;
    this.make = make;
    this.username = username;
    this.model = model;
    this.year = year;
    this.price = price;
    this.description = description;
    this.email = email;
    this.mileage = mileage;
    this.condition = condition;
    this.carID = carID;
  }
}

/**
 * for creating a new post.
 */
export class NewPost implements PostIF {
  postID: number = 0;
  title: string = "";
  description: string = "";
  year: number = 0;
  mileage: number = 0;
  condition: string = "";
  price: number = 0;
  userName: string = "";
  carID: number = 0;
}
