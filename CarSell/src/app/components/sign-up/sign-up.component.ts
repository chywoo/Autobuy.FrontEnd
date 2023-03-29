import { Component ,OnInit } from '@angular/core';
import { User } from 'src/app/model/signUp.model';
import {Result, UserIF} from '../../interfaces/restapi.interface';
import { Router } from '@angular/router';
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  objUser:User = new User();

  constructor(private auth: AuthService, private router:Router, private usersService:UsersService){}

  ngOnInit(): void{
    if (localStorage.getItem('in_progress_login') != 'true') {
      this.auth.isLoggedIn().subscribe((result: Result) => {
        if (result.result == "OK") {
          alert("You need to log out to be able to create another account");
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
  

  

  public goToPage(pageName:string):void {
    
    let user : UserIF = {
      fullName: this.objUser.name,
      userName: this.objUser.username,
      email: this.objUser.email,
      password: this.objUser.password,
      roleID: this.objUser.roleID // add userType to user object

    }

    console.log(user);

    this.usersService.createUser(user).subscribe((data:Result) => {
      if (data.result == "OK") {
        console.info("Success");
        this.router.navigate([`${pageName}`]);
      } else {
        alert(data.message)
        console.error(data.message);
      }
    });


  }

}


