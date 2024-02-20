import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { MainComponent } from './components/main/main.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { CommentsComponent } from './components/post-details/comments/comments.component';
import { PostComponent } from './components/post-list/post/post.component';


@NgModule({
  declarations: [
    MainComponent,
    PostListComponent,
    PostDetailsComponent,
    SearchPipe,
    CommentsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MenubarModule,
    AvatarModule,
    FormsModule,
    ToastModule,
    PaginatorModule,
    ProgressBarModule
  ],
  providers: [MessageService]
})
export class PostsModule { }
