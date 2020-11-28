import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PostDetailComponent } from './componentes/post-detail/post-detail.component';
import { PostFeedsComponent } from './componentes/post-feeds/post-feeds.component';

const routes: Routes = [
  {path: '', component: PostFeedsComponent},
  {path: ':nome/:usuario/:id', component: PostDetailComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }