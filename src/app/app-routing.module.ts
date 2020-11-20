import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';

const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'category/:categorySel', component: CategorylistComponent},
  {path: '**', redirectTo: 'category'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }
