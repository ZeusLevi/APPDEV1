import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  assignmentTitle = 'Keyboard Product Manual';
  name = 'Zeus Levi C. Zapanta';
  course = 'APPDEV1';
}