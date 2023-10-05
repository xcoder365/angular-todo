import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app-new';
  // paste function add and remove
  // all code on github
  // this is todolist array
  todolist : any [] = []

  //1. add Task function
  addTodo(item:string)
  {
    this.todolist.push({id:this.todolist.length,name:item})

    console.warn(this.todolist)
  }

  //2. 
  removeTodo(id:number)
  {
    console.warn(id)

    this.todolist = this.todolist.filter(item=>item.id!==id)
  }


}
