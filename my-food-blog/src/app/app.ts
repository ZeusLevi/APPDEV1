import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodList } from './food-list/food-list';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
    FoodList
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  protected readonly title = signal('my-food-blog');
}
