import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task-service.service'

@Component({
  selector: 'app-task-app',
  templateUrl: './task-app.component.html',
  styleUrls: ['./task-app.component.scss']
})
export class TaskAppComponent implements OnInit {
  lists = []

  constructor(private taskService:TaskService) { }

  async ngOnInit() {
    this.lists = await this.taskService.loadTasks()
  }

}