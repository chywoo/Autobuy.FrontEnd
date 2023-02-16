import {Component, OnInit} from '@angular/core';
import {LoginModel} from 'src/app/model/loginModel.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objLoginModel: LoginModel = new LoginModel();

  ngOnInit(): void {
  }

  btnLogin() {
    alert("Form valid");
  }
}
