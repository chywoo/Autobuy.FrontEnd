import {Component, OnInit} from '@angular/core';
import {LoginModel} from 'src/app/model/loginModel.model';
import {AuthService} from "../../services/auth.service";
import {LoginIF, Result, UserDetailIF} from "../../interfaces/restapi.interface";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objLoginModel: LoginModel = new LoginModel();

  constructor(private auth: AuthService,
              private usersService: UsersService,
              private router: Router) {}

  ngOnInit(): void {
    this.auth.isLoggedIn().subscribe((result: Result) => {
      if (result.result == "OK") {
        alert("Already logged in");
        this.router.navigate(['/']);
      }
    });
  }

  btnLogin() {
    let user: LoginIF = {
      userName: this.objLoginModel.username,
      password: this.objLoginModel.password
    }

    this.auth.login(user).subscribe((result: Result) => {
      if (result.result == "OK") {
        console.debug("Login OK");
        // store user name in local storage
        localStorage.setItem('userName', user.userName);

        this.usersService.getUserById(user.userName).subscribe((result: UserDetailIF) => {
          localStorage.setItem('fullName', result.fullName);
          localStorage.setItem('roleID', result.role.roleID.toString());
          localStorage.setItem('roleName', result.role.roleName);
        });

        alert("Login OK");
        this.router.navigate(['/']);
      } else {
        console.error(result.message);
        alert("Login failed: " + result.message)
      }
    }, (error) => {
      console.error(error);
      alert("Fail to connect the server.\nPlease check the server.");
    });
  }
}
