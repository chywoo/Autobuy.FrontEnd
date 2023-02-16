import {Component, OnInit} from '@angular/core';
import {LoginModel} from 'src/app/model/loginModel.model';
import {AuthService} from "../../services/auth.service";
import {LoginIF, Result} from "../../interfaces/restapi.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objLoginModel: LoginModel = new LoginModel();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
  }

  btnLogin() {
    let user: LoginIF = {
      userName: this.objLoginModel.username,
      password: this.objLoginModel.password
    }

    this.auth.login(user).subscribe((result: Result) => {
      if (result.result == "OK") {
        console.debug("Login OK");
        // #TODO: Navigate to success page
        alert("Login OK");
      } else {
        console.error(result.message);
        // #TODO: Show error message
        alert("Login failed: " + result.message)
      }
    });
  }
}
