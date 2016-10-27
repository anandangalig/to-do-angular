import { Component, Input, Output, EventEmitter } from '@angular/core'; //note all 4 are imported!
import { Task } from './task.model'; //access to the Task model

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask"> <!--from root component by way of edit-task component's edit button(showDetails())-->
      <h1>Edit Task</h1>
      <div>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="childSelectedTask.description">
      </div>
      <div>
        <label>Enter Task ID:</label>
        <input [(ngModel)]="childSelectedTask.id">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
