import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { MainComponent } from './components/main/main.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainComponent,
    PostComponent,
    PostDetailsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MenubarModule,
    AvatarModule,
    FormsModule
  ]
})
export class PostsModule { }
