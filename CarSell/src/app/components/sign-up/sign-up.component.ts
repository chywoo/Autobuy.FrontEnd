import { BuiltinTypeName } from '@angular/compiler';
import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { User } from 'src/app/model/signUp.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    // email = new FormGroup({
    // email: new FormControl('',[
    //   Validators.required,
    //   Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    // });
    // get primEmail(){
    //   return this.email.get('email')
    //   }
  objUser:User = new User();
  
  constructor(){}
  ngOnInit(): void{}

  btnSubmit_click(){
      alert(" Record added");
    }
  }
   

