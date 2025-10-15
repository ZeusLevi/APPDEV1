import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-gym6',
  standalone: false,
  templateUrl: './gym6.html',
  styleUrl: './gym6.css'
})
export class Gym6 {
  jasmine: any;
      
  constructor(private gymService: Service) {}
      
  ngOnInit(): void {
    this.jasmine = 
this.gymService.getJasmine();
  }
}
