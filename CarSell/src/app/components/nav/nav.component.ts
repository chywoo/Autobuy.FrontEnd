import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Result} from "../../interfaces/restapi.interface";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'login';
  myimage1: string = "assets/img/logo.png";
  isLogin: boolean = false;
  loginTitle: string = "Login";
  loginURL: string = "/login";

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    // check if user is logged in
    this.authService.isLoggedIn().subscribe((result: Result) => {
      // this.setLogoutMode();
      this.isLogin = true;
    }, error => {
      // this.setLoginMode();
      this.isLogin = false;
    });

    // check if user is logged in
    this.authService.isLoggedIn().subscribe((result: Result) => {
      this.setLogoutMode();
    });
  }

  public setLoginMode() {
    this.loginTitle = "LOGIN";
    this.loginURL = "/login";
  }

  public setLogoutMode() {
    this.loginTitle = "LOGOUT";
    this.loginURL = "/logout";
  }
}
