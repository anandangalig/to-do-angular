//===================ENTRY POINT FILE #2===========================

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { PiesListComponent } from './pies-list.component';
import { TaskListComponent } from './task-list.component';
import { EditTaskComponent } from './edit-task.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, PiesListComponent, TaskListComponent, EditTaskComponent,],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
