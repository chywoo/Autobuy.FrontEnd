import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
title = 'login';
constructor(private matDialog:MatDialog){}
  openDialog(){
this.matDialog.open(LoginComponent,{
  width:'350px',
})
  }
}
