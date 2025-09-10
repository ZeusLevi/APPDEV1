import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year = new Date().getFullYear();
  manufacturer = 'Keyboard Company';
  website = 'www.keyboardcompany.com';
  supportEmail = 'support@keyboardcompany.com';
  hotline = '1-800-555-1234';
}