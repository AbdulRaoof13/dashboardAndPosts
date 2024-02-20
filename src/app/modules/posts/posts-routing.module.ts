import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from './components/main/main.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


const routes: Routes = [
    {
        path: '', component: MainComponent, children: [
            {
                path: 'list',
                component: PostListComponent
            },
            {
                path: 'post/:id',
                component: PostDetailsComponent
            },
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule { }