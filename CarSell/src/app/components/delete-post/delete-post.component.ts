import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  ngOnInit(): void {
  }
 
  btnSubmitWorks(){
    alert("delete works");
  }
}
