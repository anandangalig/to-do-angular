//===============THE ROOT COMPONENT====================================

import { Component } from '@angular/core'; //pulls in extra functionality and definitions that our files need. Same as require for gulpfile and <script> for html.
import { Task } from './task.model';

// Component Annotation section:==================================
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <pies></pies>
    <task-list [childTaskList]="masterTaskList" (clickSender)="showDetails($event)"></task-list>
    <edit-task [childSelectedTask]="selectedTask" (doneClickedSender)="finishedEditing()"></edit-task>
    <new-task (newTaskSender)="addTask($event)"></new-task> <!--$event now holds the new task object!-->
  </div>
  `
})

// Component Class Declarations section: includes the functionality of the component. When the HTML gets rendered, these Class exports provide the objects and the models.
export class AppComponent {
  public masterTaskList: Task[] = [
    new Task("Finish Angular To-Do.", 0),
    new Task("Read about Pipe.", 1),
    new Task("Attend ITEM Meetup.", 2),
    new Task("Eat Lunch.", 3)
  ];

  //selectedTask: Task = this.tasks[0]; this is just setting the default, so ngModel latches to it right away-its job.
  selectedTask: Task = null; // here, the null makes the default item unselected, as it should be since it will be set by each edit button belonging to each task.
  showDetails(clickedTask: Task) { // now this method will expect a Task object to be passed whenever it is called.
    console.log(clickedTask);
    this.selectedTask = clickedTask; //this will help the edit button from 'task-list' showDetails to re-define selectedTask and use for 'edit-task'
  }
  finishedEditing() {
    this.selectedTask = null;
  }

  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}


// exports our components and makes it available for other components to use.
