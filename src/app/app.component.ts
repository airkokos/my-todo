import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoList = [
    {
      item: 'play basketball',
      priority: 1
    },
    {
      item: 'play hokey',
      priority: 3
    },
    {
      item: 'play football',
      priority: 2
    },
    {
      item: 'play tennis',
      priority: 3
    },
    {
      item: 'play squash',
      priority: 2
    }
  ];

}
