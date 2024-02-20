import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  @Input() post: Post = {id:0,userId:0,title:'',body:''}

}
