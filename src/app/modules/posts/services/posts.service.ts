import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getPostData(postId:number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }

  getComments(postId:number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  }

  getUserData(userId:number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
  }
}
