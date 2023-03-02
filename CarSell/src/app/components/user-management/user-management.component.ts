import { Component,OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import { User } from 'src/app/model/signUp.model';
import { Router } from '@angular/router';

export interface Element {
  name: string;
  email:string;
  username:string
  position: number;

}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent  implements OnInit{
  displayedColumns: string[] = ['position', 'name','email','username','action'];
  dataSource:Element[] = [] // ELEMENT_DATA;
  objUser:User = new User();
  constructor(private router:Router,private userService: UsersService) {  }


  ngOnInit(): void {
    this.userService.getUserList().subscribe((data)=>{
      this.dataSource = [];
      for(let i=0; i<data.length; i++){
        let user = data[i];
        let item:Element = {position: i + 1, name: user.fullName, email: user.email, username: user.userName}

        this.dataSource.push(item);
      }
    });
  }

}



