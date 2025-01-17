import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.logout().subscribe(data => {
      localStorage.removeItem('userName');
      localStorage.removeItem('fullName');
      localStorage.removeItem('roleID');
      localStorage.removeItem('roleName');

      alert("You are logged out");

      // prevent infinite loop
      localStorage.setItem('in_progress_login', 'true');
      this.router.navigate(['/']);
    }, error => {
      alert("Error: " + error);
    });
  }
}
