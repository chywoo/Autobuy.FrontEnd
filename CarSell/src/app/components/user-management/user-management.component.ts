import { Component,OnInit } from '@angular/core';

export interface Element {
  name: string;
  email:string;
  username:string
  position: number;
 
}
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'maria', email:'maria@123', username:'maria@gmail.com'},
  {position: 2, name: 'sumin',  email:'sumin@123' ,username:'sumin@gmail.com'}
  
];

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent  implements OnInit{
  

  displayedColumns: string[] = ['position', 'name','email','username','action'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }
 
  btnEdit(){
    alert("edit OK");
  }
  btnDelete(){
    alert("delete OK");
  }
}



