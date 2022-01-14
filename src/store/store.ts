import { makeAutoObservable } from "mobx";
import { TodoFilterType, TodoType } from "../types";

class Store {

  todos: TodoType[] = [
    {id: 1, title: 'do something', complited: false},
    {id: 2, title: 'do someshit', complited: false},
    {id: 3, title: 'do somebody', complited: false}
  ]

  todoFilter: TodoFilterType = TodoFilterType.all;

  constructor () {
    makeAutoObservable(this)
  }

  addTodo = (textItem: string) => {
    if(!textItem) return;
    const todo: TodoType = {
      id: Date.now(),
      title: textItem,
      complited: false
    }
    this.todos.push(todo)
  }

  removeTodo (id: number) {  
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  compliteTodo (id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, complited: !todo.complited} : todo)
  }

  setFilterTodos (filter: TodoFilterType) {  
    this.todoFilter = filter;
  }

  filteredTodos (): TodoType[] {
    switch (this.todoFilter) {
      case TodoFilterType.all:
        return this.todos;

      case TodoFilterType.complited:
        return this.todos.filter(todo => todo.complited)

      case TodoFilterType.uncomplited:
        return this.todos.filter(todo => !todo.complited)

      default:
        return this.todos;
    }
  }
}

export default new Store();