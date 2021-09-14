import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './componnets/task/task.component';
import { NotFoundComponent } from './componnets/not-found/not-found.component';
import { HomeComponent } from './componnets/home/home.component';
import { AddTaskComponent } from './componnets/add-task/add-task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NotFoundComponent,
    HomeComponent,
    AddTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
