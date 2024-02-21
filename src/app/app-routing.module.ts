import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homepage/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
