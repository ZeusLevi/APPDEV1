import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
    export class Sidebar {
    @Input() title: string = '';
    private router = inject(Router);

    navigateToHome() {
      this.router.navigate(['/']);
    }
}
