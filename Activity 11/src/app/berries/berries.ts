import { Component } from '@angular/core';
import { BerriesService } from '../berries-service';  

@Component({
  selector: 'app-berries',
  standalone: false,
  templateUrl: './berries.html',
  styleUrl: './berries.css'
})
export class Berries {
  dataSource: {name: string, held: string, bag: string}[] = [];

  constructor(private berriesService: BerriesService) {
  }
  ngOnInit(): void {
    console.log("ngOnInit called");
    this.dataSource = this.berriesService.getBerries();
  }
  displayedColumns: string[] = ['name', 'held', 'bag'];
}
