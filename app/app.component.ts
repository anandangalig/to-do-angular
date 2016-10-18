//===============THE ROOT COMPONENT====================================
import { Component } from '@angular/core'; //pulls in extra functionality and definitions that our files need. Same as require for gulpfile and <script> for html.
// Component Annotation section:==================================
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <h3 (click)="showDetails(currentTask)" *ngFor="let currentTask of tasks">{{ currentTask.description }}</h3>
    <h1>Edit Task</h1>
      <div>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="selectedTask.description">
      </div>
      <div>
        <label>Enter Task ID:</label>
        <input [(ngModel)]="selectedTask.id">
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
  selectedTask: Task = this.tasks[0]; //?????WHY MAKE IT 0th INDEX????????
  showDetails(clickedTask: Task) { // now this method will expect a Task object to be passed whenever it is called.
    this.selectedTask = clickedTask;
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id:number) {  }
}
// exports our components and makes it available for other components to use.
