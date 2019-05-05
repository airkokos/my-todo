import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'To Do List';
  item1 = 'Create nickname';
  item2 = 'Win streetball tournament';
  item3 = 'Buy new jordan`s';
  item4 = 'Do my homework';
  item5 = 'Go to the gym';

  constructor() { }

  ngOnInit() {
  }

}
