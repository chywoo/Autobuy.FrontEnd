export interface  CarIF {
  carID: number,
  carName: string,
  makerID: number,
  maker: MakerIF
}

export interface MakerIF {
  makerID: number,
  makerName: string
}

export interface Result {
  result: string,
  message: string
}

export interface UserIF {
  fullName: string,
  userName: string,
  email: string,
  password: string
}

export interface LoginIF {
  userName: string,
  password: string
}

export interface PostIF {
  postID: number,
  title: string,
  description: string,
  year: number,
  mileage: number,
  price: number,
  userName: string,
  carID: number,
  author: UserIF,  // This field is used in the GET method
  carInfo: CarIF   // This field is used in the GET method
}
