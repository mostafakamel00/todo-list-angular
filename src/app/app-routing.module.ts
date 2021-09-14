import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './componnets/add-task/add-task.component';
import { HomeComponent } from './componnets/home/home.component';
import { NotFoundComponent } from './componnets/not-found/not-found.component';
import { TaskComponent } from './componnets/task/task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
