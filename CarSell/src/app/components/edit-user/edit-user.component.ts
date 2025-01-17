import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/model/signUp.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from "../../services/users.service";
import {UserDetailIF, UserIF} from "../../interfaces/restapi.interface";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
  userName: string | null = null;
  objUser: User = new User();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UsersService) {
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
    // alert(`{id}`);
    let user: UserIF = {
      userName: this.objUser.username,
      fullName: this.objUser.name,
      email: this.objUser.email,
      password: this.objUser.password,
      roleID: this.objUser.roleID
    }

    this.userService.updateUser(this.objUser.username, user).subscribe((result  ) => {
      if (result.result == "OK" ) {
        alert("Information updated successfully")
        this.router.navigate(['/userManagement']);
      } else {
        alert("Update user failed.");
      }
    });
  }
}
