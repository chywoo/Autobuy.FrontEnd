import { BuiltinTypeName } from '@angular/compiler';
import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { UserRegistration } from 'src/app/model/signUp.model';
import { User} from "../../model/RESTAPI.model";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // email = new FormGroup({
  // email: new FormControl('',[
  //   Validators.required,
  //   Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  // });
  // get primEmail(){
  //   return this.email.get('email')
  //   }
  objUser: UserRegistration = new UserRegistration();

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
  }

  btnSubmit_click() {
    let apiUser: User = {
      userId: this.objUser.name,
      userName: this.objUser.username,
      email: this.objUser.email,
      password: this.objUser.password
    };

    this.userService.createUser(apiUser).subscribe((data) => {
      if (data.Result == "OK") {
        // Success code.
        console.info("Registered successfully.");
      } else {
        // Fail code.
        console.error("Registeration failed.");
      }
    });
  }
}

