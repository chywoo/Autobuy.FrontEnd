import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserDetailIF, UserIF} from "../../interfaces/restapi.interface";
import {User} from "../../model/signUp.model";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userName: string | null = null;
  objUser: User = new User();

  constructor(private activatedRoute:ActivatedRoute,  private router:Router,private userService: UsersService) {
  }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.userName != null) {
      this.userService.getUserById(this.userName).subscribe((data: UserDetailIF) => {
        console.info(data);
        this.objUser.username = data.userName;
        this.objUser.name = data.fullName;
        this.objUser.email = data.email;
        this.objUser.password = data.password;
        this.objUser.roleID = data.role.roleID;
      });
    } else {
      console.error("Wrong user name.");
    }
  }

  btnSubmitWorks() {
    this.userService.deleteUser(this.objUser.username).subscribe((result  ) => {
      if (result.result == "OK" ) {
        alert("User deleted successfully");
        this.router.navigate(['/userManagement']);
      } else {
        alert("Delete user failed.");
      }
    });
  }
}
