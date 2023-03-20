import {Component, OnInit} from '@angular/core';
import {LoginModel} from 'src/app/model/loginModel.model';
import {AuthService} from "../../services/auth.service";
import {LoginIF, Result} from "../../interfaces/restapi.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objLoginModel: LoginModel = new LoginModel();

  constructor(private auth: AuthService,
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

        alert("Login OK");
        this.router.navigate(['/']);
      } else {
        console.error(result.message);
        // #TODO: Show error message
        alert("Login failed: " + result.message)
      }
    }, (error) => {
      console.error(error);
      alert("Fail to connect the server.\nPlease check the server.");
    });
  }
}
