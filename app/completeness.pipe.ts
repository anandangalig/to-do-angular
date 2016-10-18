import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "completeness",
  pure: false // it is stateful: tells Angular to check if the output has changed after each change detection cycle, causing it to update as soon as we change something about a task
})

export class CompletenessPipe implements PipeTransform { //PipeTransform is an interface definition inside of Angular Core
  transform(input: Task[], desiredCompleteness) {
    var output: Task[] = [];
    if(desiredCompleteness === "notDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
