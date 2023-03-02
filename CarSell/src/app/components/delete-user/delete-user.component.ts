import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserIF} from "../../interfaces/restapi.interface";
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
      this.userService.getUserById(this.userName).subscribe((data: UserIF) => {
        console.info(data);
        this.objUser.username = data.userName;
        this.objUser.name = data.fullName;
        this.objUser.email = data.email;
        this.objUser.password = data.password;
      });
    } else {
      console.error("Wrong user name.");
    }
  }

  btnSubmitWorks() {

  }
}
