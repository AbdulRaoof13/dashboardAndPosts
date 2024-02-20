import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

  constructor() {}

  @Input() comment:any = {postId: 0, id: 0, name: "", email: "", body:"" };

}
