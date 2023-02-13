import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{FormsModule , ReactiveFormsModule} from'@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SignUpComponent,
    DialogBoxComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatDialogModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
