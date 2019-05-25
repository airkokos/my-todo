import { Component, OnInit, Input} from '@angular/core';





@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoList;



  constructor() {}
  color;

  ngOnInit() {
    switch (this.todoList.priority) {
      case 1:
      this.color = 'green';
      break;
      case 2:
      this.color = 'yellow';
      break;
      case 3:
      this.color = 'red';
      break;
    }
    }

}
