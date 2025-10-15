import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  home: any;

  constructor(private gymService: Service) {}

  ngOnInit(): void {
    this.home = 
this.gymService.getHome();
  }
}