import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';

@Component({
  selector: 'ea-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit { 
  comment$ = this.commentService.getComments();
  comments$ = this.activatedRoute.data.pipe(pluck('comments'));

    constructor(private http: HttpClient, private commentService: CommentService,
      private activatedRoute: ActivatedRoute
      ) {   }
  ngOnInit(): void {
this.commentService.getComments().subscribe(console.log)
this.activatedRoute.data.subscribe((data)=>{
  this.comments$=data['comments'];
})
  }
}