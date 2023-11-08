import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentsDto } from './comments-dto';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
    
}
getComments(){
  return this.http.get<CommentsDto[]>('https://jsonplaceholder.typicode.com/comments');
}}
