import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [
    {
      'task': [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
      ]
    },
    {
      'in process': [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
      ]
    },
    {
      'completed': [
       
      ]
    }
  ]
  constructor() { }

  async loadTasks() {
    return await this.tasks
  }
}
