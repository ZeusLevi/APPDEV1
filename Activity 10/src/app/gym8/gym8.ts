import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-gym8',
  standalone: false,
  templateUrl: './gym8.html',
  styleUrl: './gym8.css'
})
export class Gym8 {
  clair: any;

  constructor(private gymService: Service) {}

  ngOnInit(): void {
    this.clair = 
this.gymService.getClair();
  }
}
