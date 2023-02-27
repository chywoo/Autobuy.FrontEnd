import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/signUp.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {UsersService} from "../../services/users.service";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
 
  objUser:User = new User();
  constructor(public router:ActivatedRoute,private userService: UsersService) {  }
  
  ngOnInit(): void {
   
  // let username:string = this.router.snapshot.paramMap.get('username');
  //  const x = this.userService.getUserById(username).subscribe(ex=>this.objUser.username = username); 


  }
 
  btnSubmitWorks(){
    alert("edit works");
  }
  



}
