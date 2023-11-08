import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommentService } from './comment.service';


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ]
})
export class CommentModule {}
