import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-gym7',
  standalone: false,
  templateUrl: './gym7.html',
  styleUrl: './gym7.css'
})
export class Gym7 {
  pryce: any;
          
  constructor(private gymService: Service) {}
          
  ngOnInit(): void {
    this.pryce = 
this.gymService.getPryce();
  }
}
