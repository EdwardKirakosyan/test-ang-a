import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SerService {
  constructor() {}

  add(x: number, y: number) {
    return x + y;
  }
}
