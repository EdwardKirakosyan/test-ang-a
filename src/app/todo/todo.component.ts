import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  template: `
    <h2>(TODO) Read Angular Essentials {{ taskTitle }} Guide</h2>
    @if (isAdmin) {
    <button>era</button>
    } @else {
    <p>You are not authorized.</p>
    }

    <p>{{ announcement }}</p>

    <button (click)="save()">Save</button>

    <button (click)="createUser($event)">Submit</button>

    <ul>
      @for (ingredient of ingredientList; track ingredient.name ) {
      <li>{{ ingredient.name }}</li>
      }
    </ul>
  `,
  styles: `
    li {
      color: red;
    }
  `,
})
export class TodoComponent {
  createUser($event: MouseEvent) {
    console.log($event.target);
  }
  announcement = 'Hello again Angular!';

  save() {
    this.announcement = this.announcement.toUpperCase();
  }

  ingredientList = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];

  isAdmin = true;
  taskTitle = '';
  isComplete = false;

  completeTask() {
    this.isComplete = true;
  }
  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }
}
