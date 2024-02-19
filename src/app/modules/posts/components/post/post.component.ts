import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{

  posts:any=[];
  searchPost:string= '';

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getPosts().subscribe({
      next:(res:any)=>{
        this.posts = res;
      },
      error:(err:any)=>{

      }
    })
  }
  
}
