import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { VegetableService } from '../vegetable-service';

@Component({
  selector: 'app-vegetables',
  imports: [MatTableModule],
  templateUrl: './vegetables.html',
  styleUrl: './vegetables.css'
})

export class Vegetables {
  dataSource: {name: string; color: string}[] = [];
  //Inject the service in to the component for vegetables
  constructor(private v: VegetableService){
  }

  //on the initialization of the component
  //load the data
  ngOnInit(): void {
    console.log('ngOnInit called');
    this.dataSource = this.v.getVegetables();
  }
    displayedColumns: string[] = ['name', 'color'];
}