import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-gym1',
  standalone: false,
  templateUrl: './gym1.html',
  styleUrl: './gym1.css'
})
export class Gym1 {
  falkner: any;

  constructor(private gymService: Service) {}

  ngOnInit(): void {
    this.falkner = 
this.gymService.getFalkner();
  }
}
