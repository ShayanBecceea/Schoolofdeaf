import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';

const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'category/:categorySel', component: CategorylistComponent},
  {path: 'category/:categorySel/:cat', component: CategorydetailsComponent},
  {path: '**', redirectTo: 'category'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }
