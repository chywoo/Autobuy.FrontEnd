import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/model/signUp.model';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from "../../services/users.service";
import {UserIF} from "../../interfaces/restapi.interface";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

  objUser: User = new User();

  constructor(private route: ActivatedRoute, private userService: UsersService) {
  }

  ngOnInit(): void {
    let userName: string | null = this.route.snapshot.paramMap.get('id');

    if (userName != null) {
      this.userService.getUserById(userName).subscribe((data: UserIF) => {
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
    alert(`{id}`);
  }
}
