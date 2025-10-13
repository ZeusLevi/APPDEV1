import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-gym2',
  standalone: false,
  templateUrl: './gym2.html',
  styleUrl: './gym2.css'
})
export class Gym2 {
  bugsy: any;
  
  constructor(private gymService: Service) {}
  
  ngOnInit(): void {
    this.bugsy = 
this.gymService.getBugsy();
    }
}
