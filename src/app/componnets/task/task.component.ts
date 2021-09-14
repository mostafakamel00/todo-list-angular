import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  userId: any;
  task: any;
  constructor(
    private route: ActivatedRoute,
    private taskSer: TasksService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Edit Tasks');
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    // console.log(this.userId);
    this.task = this.taskSer.tasks[this.userId];
  }
  delete() {
    this.taskSer.delete(this.userId);
    this.router.navigate(['']);
  }
  saveTask() {
    this.taskSer.editTask(this.userId, this.task);
    this.router.navigate(['']);
  }
}
