import { BuiltinTypeName } from '@angular/compiler';
import { Component ,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/model/signUp.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  objUser:User = new User();
  
  constructor(){}
  ngOnInit(): void{}

  btnSubmit_click(){
      alert(" Record added");
    }
  }


