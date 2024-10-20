import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule] // FormsModule'ü buraya ekleyin
})
export class TodoComponent {
  work: string = '';
  updateWork: string = '';
  updateIndex: number = 0;
  todos: { work: string; done: boolean }[] = [];
  ispUpdateWorkFormActive: boolean = false;

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
