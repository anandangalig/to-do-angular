import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input #newId>
      <button (click)="addClicked(newDescription.value, newId.value); newDescription.value='';
        newId.value='';">Add</button> <!--addClicked is triggered, values grabbed, then set back to empty fields-->
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter(); //newTaskEmiiter is being created here.
  addClicked(description: string, id: number) {
    var newTaskToAdd: Task = new Task(description, id);
    this.newTaskSender.emit(newTaskToAdd); //newTaskSender is sent over to parent in (), and the value passes (i.e. newTaskToAdd) shows up in parent as $event.
  }
}
