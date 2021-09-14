import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  constructor(
    public taskSer: TasksService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Add Task');
  }

  ngOnInit(): void {}
  saveTask(title: any, des: any) {
    this.taskSer.save(title.value, des.value);
    this.router.navigate(['']);
  }
}
