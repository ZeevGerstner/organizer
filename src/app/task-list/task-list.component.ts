import { Component, OnInit, Input } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() artists:[]
  
  constructor() {
  }

  ngOnInit() {
  }

  drop(event) {
    moveItemInArray(this.artists, event.previousIndex, event.currentIndex);
  }
}