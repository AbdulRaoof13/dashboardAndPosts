import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { MessageService } from 'primeng/api';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  searchPost: string = '';
  loading: boolean = false;
  first: number = 0;
  rows: number = 10;

  constructor(private postService: PostsService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  onPageChange(event: any) {
    debugger;
    this.first = event.first;
    this.rows = event.rows;
  }

  lengthOgPosts(posts:any){
    return posts.length;
  }

  getAllPosts() {
    this.loading = true
    this.postService.getPosts().subscribe({
      next: (res: any) => {
        this.posts = res;
        this.loading = false;
      },
      error: (err: any) => {
        console.log(err)
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong while fetching data' });
        this.loading = false;
      }
    })
  }

}
