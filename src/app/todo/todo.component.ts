import { Component, OnInit } from '@angular/core';
import {Event} from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todo: {id: number, text: string}[] = [];
  done: {id: number, text: string}[] = [];

  uniqueIdCounter = 0;

  onPlus(value: string) {
    if(value === ''){ return;}
    this.todo.push({id: this.uniqueIdCounter++, text: value});
  }

  onTodoDelete(id: number) {
    for (let i = 0; i < this.todo.length; i++) {
      if (this.todo[i].id === id) {
        this.todo.splice(i, 1);
      }
    }
  }

  onDoneDelete(id: number) {
    for (let i = 0; i < this.done.length; i++) {
      if (this.done[i].id === id) {
        this.done.splice(i, 1);
      }
    }
  }

  onMoveToDone(id: number) {
    for (let i = 0; i < this.todo.length; i++) {
      if (this.todo[i].id === id) {
        this.done.push(this.todo[i]);
        this.todo.splice(i, 1);
      }
    }
  }

}
