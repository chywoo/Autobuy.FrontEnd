import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule , ReactiveFormsModule} from'@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { LoginComponent } from './login/login.component';
import { LoginComponent } from './components/login/login.component';
import { MatTableModule } from '@angular/material/table'  
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import {CdkTableModule} from '@angular/cdk/table';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { PostManagementComponent } from './components/post-management/post-management.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SignUpComponent,
    DialogBoxComponent,
    LoginComponent,
    EditUserComponent,
    DeleteUserComponent,
    UserManagementComponent,
    PostManagementComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ MatTableModule ]
})
export class AppModule { }
