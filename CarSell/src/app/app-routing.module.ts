import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { LoginComponent } from './components/login/login.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { PostManagementComponent } from './components/post-management/post-management.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { DeletePostComponent } from './components/delete-post/delete-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { MypostComponent } from './components/mypost/mypost.component';
import { PostSeachComponent } from './components/post-search/post-seach.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"registationConfirmation",component:DialogBoxComponent},
  {path:"login",component:LoginComponent},
  {path:"userManagement",component:UserManagementComponent},
  {path:"editUser/:id", component:EditUserComponent},
  {path:"deleteUser/:id",component:DeleteUserComponent},
  {path:"posts",component:PostManagementComponent},
  {path:"deletePost/:id", component:DeletePostComponent},
  {path:"editPost/:id", component:EditPostComponent},
  {path:"addPost", component:AddPostComponent},
  {path:"mypost" , component:MypostComponent},
  {path:"postSearch", component: PostSeachComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ]
})
export class AppRoutingModule { }
