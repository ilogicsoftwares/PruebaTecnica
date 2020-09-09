import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CommentComponent } from './components/comment/comment.component';

const routes: Routes = [
  {
    path: '',
    component: ItemListComponent,
    pathMatch: 'full'

  },
  {
    path: 'comments/:id',
    component: CommentComponent,
    
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
