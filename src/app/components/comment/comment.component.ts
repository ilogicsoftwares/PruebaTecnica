import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { ActivatedRoute } from '@angular/router';
import  Comment  from "../../../app/models/comments";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
comment:Comment;
  constructor(private req:RequestsService, private router:ActivatedRoute) { }

  ngOnInit() {

    let id=this.router.snapshot.paramMap.get("id");
    if(id)
    this.req.comment(id).subscribe((data:Comment)=>{


    this.comment=data;
    });
  }
  
}
