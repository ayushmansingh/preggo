import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../comment.service';
import data from "src/assets/community.json";

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  id: any;
  postDetails:any;
  currentInput:String;
  constructor(public activatedRoute: ActivatedRoute,
    private router: Router, private commentService : CommentService) {
      this.id = this.commentService.getId();
      this.postDetails = data[this.id];
    }

  ngOnInit() {
    this.id = this.commentService.getId();
    console.log(this.id);
  }

  addReply(){
    let newReply = {
      name : 'Diksha',
      comment : this.currentInput
    };
    this.postDetails.comments.push(newReply);
    this.currentInput = "";
    this.ngOnInit();
  }
}