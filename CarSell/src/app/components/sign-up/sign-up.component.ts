import { BuiltinTypeName } from '@angular/compiler';
import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { User } from 'src/app/model/signUp.model';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  objUser:User = new User();
  
  constructor(private router:Router){} 
  
  ngOnInit(): void{}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}


