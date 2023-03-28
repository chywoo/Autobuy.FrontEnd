export interface  CarIF {
  carID: number,
  carModel: string,
  makeID: number,
  imageURL: string,
  displacement: number,
  wheelbase: number,
  length: number,
  width: number,
  height: number,
  make: MakeIF
}

export interface MakeIF {
  makeID: number,
  makeName: string
}

export interface Result {
  result: string,
  message: string
}

export interface RoleIF {
  roleID: number,
  roleName: string
}

export interface UserIF {
  fullName: string,
  userName: string,
  email: string,
  password: string,
  roleID: number
}

export interface UserDetailIF {
  fullName: string,
  userName: string,
  email: string,
  password: string,
  role: RoleIF
}

export interface UserListIF {
  total: number,
  pageSize: number,
  page: number,
  users: UserDetailIF[]
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
  condition: string,
  price: number,
  userName: string,
  carID: number,
}

export interface PostDetailIF {
  postID: number,
  title: string,
  description: string,
  year: number,
  mileage: number,
  condition: string,
  price: number,
  userName: string,
  carID: number,
  author: UserIF,  // This field is used in the GET method
  car: CarIF // This field is used in the GET method
}

export interface PostListIF {
  total: number,
  pageSize: number,
  page: number,
  posts: PostDetailIF[]
}
