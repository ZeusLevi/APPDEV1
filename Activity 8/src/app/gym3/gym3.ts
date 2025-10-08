import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-gym3',
  standalone: false,
  templateUrl: './gym3.html',
  styleUrl: './gym3.css'
})
export class Gym3 {
  whitney: any;
    
  constructor(private gymService: Service) {}
    
  ngOnInit(): void {
    this.whitney = 
this.gymService.getWhitney();
  }
}
