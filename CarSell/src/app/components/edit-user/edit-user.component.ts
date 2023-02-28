import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/signUp.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {UsersService} from "../../services/users.service";
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
  
  objUser:User = new User();
  
  constructor(private route: ActivatedRoute) {  }
  
  ngOnInit(): void {
   
  // let username:string = this.router.snapshot.paramMap.get('username');
  //  const x = this.userService.getUserById(username).subscribe(ex=>this.objUser.username = username); 
  
  const id = this.route.snapshot.paramMap.get('id');
  console.log(id);
  }

  btnSubmitWorks(){
    alert(`{id}`);
  }
  



}
