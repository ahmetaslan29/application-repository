import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  work: string = '';
  updateWork: string = '';
  updateIndex: number = 0;
  todos: { work: string; done: boolean }[] = [];
  ispUpdateWorkFormActive: boolean = false;

  constructor() { }

  save() {
    this.todos.push({ work: this.work, done: false });
    this.work = '';
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }

  get(index: number) {
    this.updateIndex = index;
    this.updateWork = this.todos[index].work;
    this.ispUpdateWorkFormActive = true;
  }

  update() {
    this.todos[this.updateIndex].work = this.updateWork;
    this.ispUpdateWorkFormActive = false;
  }
}
