import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  count: number = 0;

  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }
  randomize() {
    this.count = Math.floor(Math.random() * 201) - 100;
  }
  reset() {
    this.count = 0;
  }

}
