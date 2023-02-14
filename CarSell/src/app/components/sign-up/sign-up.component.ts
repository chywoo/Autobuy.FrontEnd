import { Component ,OnInit } from '@angular/core';
import { User } from 'src/app/model/signUp.model';
import {Result, UserIF} from '../../interfaces/RESTAPI.model';
import { Router } from '@angular/router';
import {UsersService} from "../../services/users.service";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  objUser:User = new User();

  constructor(private router:Router, private usersService:UsersService){}

  ngOnInit(): void{}

  public goToPage(pageName:string):void {
    let user : UserIF = {
      userId: this.objUser.name,
      userName: this.objUser.username,
      email: this.objUser.email,
      password: this.objUser.password
    }

    console.log(user);

    this.usersService.createUser(user).subscribe((data:Result) => {
      if (data.result == "OK") {
        console.info("Success");
        this.router.navigate([`${pageName}`]);
      } else {
        console.error(data.message);
      }
    });


  }

}

