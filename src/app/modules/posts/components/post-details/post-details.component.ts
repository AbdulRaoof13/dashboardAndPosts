import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { MessageService } from 'primeng/api';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent implements OnInit {

  @Input('id') postId = 0;
  loading:boolean=false;
  post: Post = {id:0,userId:0,title:'',body:''};
  comments: Object[] = [];
  user:any = {}

  constructor(private postService: PostsService, private messageService: MessageService) {}

  ngOnInit(): void {
    console.log(this.postId);
    this.loading = true;
    this.getPost()
  }

  getPost(){
    this.postService.getPostData(this.postId).subscribe({
      next:(res:any)=>{
        this.post = res;
        this.getComments();
      },
      error:(err:any)=>{
        console.log(err)
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong while fetching data' });
        this.loading = false;
      }
    })
  }

  getComments(){
    this.postService.getComments(this.postId).subscribe({
      next:(res:any)=>{
        this.comments = res;
        this.getUserData();
      },
      error:(err:any)=>{
        console.log(err)
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong while fetching data' });
        this.getUserData();
        // this.loading = false;
      }
    })
  }

  getUserData(){
    this.postService.getUserData(this.post.userId).subscribe({
      next:(res:any)=>{
        this.user = res[0];
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
