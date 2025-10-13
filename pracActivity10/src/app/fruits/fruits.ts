import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { FruitService } from '../fruit-service';
@Component({
  selector: 'app-fruits',
  imports: [MatTableModule],
  templateUrl: './fruits.html',
  styleUrl: './fruits.css'
})
export class Fruits {
  dataSource: {name: string; color: string}[] = [];

  //Inject the service in to the component for fruits
  constructor(private f: FruitService){

  }
  //on the initialization of the component
  //load the data
  ngOnInit(): void {
    console.log('ngOnInit called');
    this.dataSource = this.f.getFruits();
  }

  displayedColumns: string[] = ['name', 'color']
}
