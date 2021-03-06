import { Component, OnInit } from '@angular/core';
import Post from "../app/models/post"
import { RequestsService } from './services/requests.service';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PruebaTecnica';
  posts:Post;
  alive=true;
  constructor(private req:RequestsService){
   
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.alive=false;
  }
  ngOnInit(): void {
   this.req.post().pipe(takeWhile(()=>this.alive)).subscribe((data:Post)=>{
     this.posts=data;
   })
    
    
  }
}
