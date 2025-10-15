import { Component } from '@angular/core';
import { PokeballsService } from '../pokeballs-service';

@Component({
  selector: 'app-pokeballs',
  standalone: false,
  templateUrl: './pokeballs.html',
  styleUrl: './pokeballs.css'
})
export class Pokeballs {
  dataSource: {name: string, description: string}[] = [];

  constructor(private pokeballsService: PokeballsService) {
  }
  ngOnInit(): void {
    console.log("ngOnInit called");
    this.dataSource = this.pokeballsService.getPokeballs();
  }
  displayedColumns: string[] = ['img','name', 'description'];
}
