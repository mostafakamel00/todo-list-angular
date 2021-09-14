import { Injectable } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Array<Task> = [
    {
      title: 'welcome to',
      description: 'task manager',
    },
  ];
  constructor() {
    let savedTasks = localStorage.getItem('token');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    } else {
      this.tasks = [];
    }
  }
  delete(i: any) {
    this.tasks.splice(i, 1);
    this.saveAll();
  }

  save(title: string, description: string) {
    this.tasks.push({
      title,
      description,
    });
    this.saveAll();
  }
  saveAll() {
    localStorage.setItem('token', JSON.stringify(this.tasks));
  }
  editTask(i: any, data: any) {
    this.tasks[i] = data;
    this.saveAll();
  }
}
