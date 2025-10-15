import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-gym5',
  standalone: false,
  templateUrl: './gym5.html',
  styleUrl: './gym5.css'
})
export class Gym5 {
  chuck: any;
        
  constructor(private gymService: Service) {}
        
  ngOnInit(): void {
    this.chuck = 
this.gymService.getChuck();
  }
}
