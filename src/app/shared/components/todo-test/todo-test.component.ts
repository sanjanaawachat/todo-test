import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../models/todo';

@Component({
  selector: 'app-todo-test',
  templateUrl: './todo-test.component.html',
  styleUrls: ['./todo-test.component.scss']
})
export class TodoTestComponent implements OnInit {
  todoArray:Array<Itodo>=[]
  @ViewChild("todoItem")todoItem!: ElementRef;

  uuid(){
    // Generate a random UUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
  }
  constructor() { }
  
  ngOnInit(): void {
  }
  ontodoAdd(){
    let todoobj:Itodo={
      todoItem:this.todoItem.nativeElement.value,
      todoId:this.uuid(),
    }
    this.todoArray.push(todoobj);
    this.todoItem.nativeElement.value='';
    console.log("new todo obj is added successfully", todoobj);
    
  }
}
