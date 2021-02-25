import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('This is a test'),
    new Todo('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui numquam, voluptatibus rem in modi veritatis, repudiandae dolor quam saepe esse obcaecati, totam adipisci. Nemo, iusto ut debitis voluptates exercitationem assumenda.', true)
  ];

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
