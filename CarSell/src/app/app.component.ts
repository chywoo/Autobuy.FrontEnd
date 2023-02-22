import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CarSell';
 
  constructor(private _userService:UsersService){}
 
  ngOnInit(): void {
    
  }

  getUserList(){
    this._userService.getUserList().subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:console.log
      
    })
  }
}
