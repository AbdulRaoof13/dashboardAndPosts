import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{

  posts:any=[];
  searchPost:string= '';
  loading:boolean=false;

  constructor(private postService: PostsService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.loading = true
    this.postService.getPosts().subscribe({
      next:(res:any)=>{
        this.posts = res;
        this.loading = false;
      },
      error:(err:any)=>{
        console.log(err)
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong while fetching data' });
        this.loading = false;
      }
    })
  }
  
}
