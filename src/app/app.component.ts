import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // CSS sayfasını burada ekliyoruz
})
export class AppComponent {
  work: string = '';
  updateWork: string = '';
  updateIndex: number = 0;
  todos: string[] = [];
  ispUpdateWorkFormActive: boolean = false;

  // Yeni todo ekleme fonksiyonu
  save() {
    if (this.work.trim()) {
      this.todos.push(this.work.trim());
      this.work = '';  // input'u temizler
    }
  }

  // Todo silme fonksiyonu
  delete(index: number) {
    this.todos.splice(index, 1);
  }

  // Todo güncelleme için veriyi çekme fonksiyonu
  get(index: number) {
    this.updateIndex = index;
    this.updateWork = this.todos[index];
    this.ispUpdateWorkFormActive = true;
  }

  // Todo güncelleme fonksiyonu
  update() {
    if (this.updateWork.trim()) {
      this.todos[this.updateIndex] = this.updateWork.trim();
      this.ispUpdateWorkFormActive = false;
      this.updateWork = '';  // güncelleme input'unu temizler
    }
  }
}
