import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { SerService } from './services/ser.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoComponent],
  template: `
    <h1>Title</h1>
    <app-todo />
  `,
})
export class AppComponent {
  private ser = inject(SerService);
  total = this.ser.add(40, 22);
}
