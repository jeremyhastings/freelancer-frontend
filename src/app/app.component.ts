import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>Navigation</h1>
    <router-outlet></router-outlet>
`
  // selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Freelance Dashboard';
}
