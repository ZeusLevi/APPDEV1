import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Activity4');

  colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];

  currentColorIndex = signal(0);
  currentColor = signal(this.colors[0]);

  changeColor() {
    // Calculate the next index and update the current color
    const nextIndex = (this.currentColorIndex() + 1) % this.colors.length;
    this.currentColorIndex.set(nextIndex);
    this.currentColor.set(this.colors[nextIndex]);
    return nextIndex;
  }
}
