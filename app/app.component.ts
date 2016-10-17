import { Component } from '@angular/core'; //pulls in extra functionality and definitions that our files need. Same as require for gulpfile and <script> for html.

// Component Annotation section:==================================
@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  `
})
// Component Class Declaration section: includes the functionality of the component

export class AppComponent {

} // exports our components and makes it available for other components to use. 
