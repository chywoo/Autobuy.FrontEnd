import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginModel} from 'src/app/model/loginModel.model';
import {AuthService} from "../../services/auth.service";
import {LoginIF, Result, UserDetailIF} from "../../interfaces/restapi.interface";
import {ActivatedRoute, Router} from "@angular/router";
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
    if (localStorage.getItem('in_progress_login') != 'true') {
      this.auth.isLoggedIn().subscribe((result: Result) => {
        if (result.result == "OK") {
          alert("Already logged in");
          this.router.navigate(['/'], {skipLocationChange: true});
        } else {
          localStorage.removeItem('userName');
          localStorage.removeItem('fullName');
          localStorage.removeItem('roleID');
          localStorage.removeItem('roleName');
          localStorage.removeItem('in_progress_login');
        }
      }, (error) => {
        //console.error(error);
      });
    } else {
      localStorage.removeItem('in_progress_login');
    }
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

        this.usersService.getUserById(user.userName).subscribe((result: UserDetailIF) => {
          localStorage.setItem('userName', result.userName);
          localStorage.setItem('fullName', result.fullName);
          localStorage.setItem('roleID', result.role.roleID.toString());
          localStorage.setItem('roleName', result.role.roleName);

          alert("Login OK");
          localStorage.setItem('in_progress_login', 'true');
          this.router.navigate(['/']);
        });
      } else {
        console.error(result.message);
        alert("Login failed: " + result.message)
      }

    }, (error) => {
      if (error.status == 401) {
        alert("Login failed: Invalid username or password");
      } else {
        console.error(error);
        alert("Fail to connect the server.\nPlease check the server.");
      }
    });
  }
}
