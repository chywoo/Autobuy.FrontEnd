import { Component,OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import { User } from 'src/app/model/signUp.model';
import { Router } from '@angular/router';
import {Result} from "../../interfaces/restapi.interface";
import {AuthService} from "../../services/auth.service";

export interface Element {
  username:string;
  name: string;
  email:string;
  roleName: string;
  position: number;

}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent  implements OnInit{
  displayedColumns: string[] = ['position','username', 'name','email','roleName','action'];
  dataSource:Element[] = [] // ELEMENT_DATA;
  objUser:User = new User();

  pageSize: number;
  page: number;
  totalUsers: number;

  constructor(private router:Router,
              private userService: UsersService,
              private authService: AuthService) {
    this.pageSize = 10;
    this.page = 0;
    this.totalUsers = 0;
  }


  ngOnInit(): void {
    // check if user is logged in
    this.authService.isLoggedIn().subscribe((result: Result) => {
    }, error => {
      alert("Login required");
      this.router.navigate(['/login']);
      return;
    });

    let userName = localStorage.getItem("userName");
    let roleID = localStorage.getItem("roleID");

    if (userName == null || roleID == null) {
      this.router.navigate(['/login']);
      return;
    }

    this.userService.getUserList(this.pageSize, this.page).subscribe((data)=>{
      this.dataSource = [];
      this.totalUsers = data.total;

      let users = data.users;
      for(let i=0; i< users.length; i++){
        let user = users[i];
        let item:Element = {position: i + 1, name: user.fullName, email: user.email, username: user.userName, roleName: user.role.roleName }

        this.dataSource.push(item);
      }
    }, error => {
      alert("You are not authorized to access this page");
      this.router.navigate(['/']);
    });
  }

  changePage(pageEvent: any) {
    this.pageSize = pageEvent.pageSize;
    this.page = pageEvent.pageIndex;
    console.log(pageEvent);
    this.ngOnInit();
  }
}



