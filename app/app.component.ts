//===============THE ROOT COMPONENT====================================
import { Component } from '@angular/core'; //pulls in extra functionality and definitions that our files need. Same as require for gulpfile and <script> for html.
// Component Annotation section:==================================
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <div *ngFor="let currentTask of tasks">
      <h3>{{ currentTask.description }}</h3>
      <button (click)="showDetails(currentTask)">Edit</button>
    </div>
    <div *ngIf="selectedTask">
      <h1>Edit Task</h1>
      <div>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="selectedTask.description">
      </div>
      <div>
        <label>Enter Task ID:</label>
        <input [(ngModel)]="selectedTask.id">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})
// Component Class Declarations section: includes the functionality of the component. When the HTML gets rendered, these Class exports provide the objects and the models.

export class AppComponent {
  public tasks: Task[] = [
    new Task("Finish Angular To-Do.", 0),
    new Task("Read about Pipe.", 1),
    new Task("Attend ITEM Meetup.", 2),
    new Task("Eat Lunch.", 3)
  ];
  //selectedTask: Task = this.tasks[0]; this is just setting the default, so ngModel latches to it right away-its job.
  selectedTask: Task = null; // here, the null makes the default item unselected, as it should be since it will be set by each edit button belonging to each task.
  showDetails(clickedTask: Task) { // now this method will expect a Task object to be passed whenever it is called.
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id:number) {  }
}
// exports our components and makes it available for other components to use.
