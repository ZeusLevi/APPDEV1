import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Meditations of Marcus Aurelius';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.includes('taoteching')) {
          this.title = 'Quotes from the Tao Te Ching';
        } else if (event.urlAfterRedirects.includes('meditations')) {
          this.title = 'Meditations of Marcus Aurelius';
        }
      }
    });
  }
}
