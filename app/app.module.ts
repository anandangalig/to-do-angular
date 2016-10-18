//===================ENTRY POINT FILE #2===========================
// each new component and module gets added here and in the NgModule bracket(declaration if Component and in imports if Module):

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { PiesListComponent } from './pies-list.component';
import { TaskListComponent } from './task-list.component';
import { EditTaskComponent } from './edit-task.component';
import { NewTaskComponent } from './new-task.component';
import { CompletenessPipe } from './completeness.pipe';
import { TaskComponent } from './task.component';




@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, PiesListComponent, TaskListComponent, EditTaskComponent, NewTaskComponent, CompletenessPipe, TaskComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
