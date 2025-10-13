import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-gym4',
  standalone: false,
  templateUrl: './gym4.html',
  styleUrl: './gym4.css'
})
export class Gym4 {
  morty: any;
      
  constructor(private gymService: Service) {}
      
  ngOnInit(): void {
    this.morty = 
this.gymService.getMorty();
  }
}