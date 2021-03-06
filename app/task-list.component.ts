import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <select (change)="onChange($event.target.value)" class="filter"> <!-- event listener on change-->
    <option value="all">Show All</option>
    <option value="isDone">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness">
    <task-display [task]="currentTask"></task-display> <!--due to for loop, each specific task will be inputted to child task.component-->
    <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
  </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit); //taskToEdit is being sent over to a different component via the bridge(event emitter)
  }
  onChange(optionFromMenu) {
  this.selectedCompleteness = optionFromMenu;
  console.log(this.selectedCompleteness);
  }
}
