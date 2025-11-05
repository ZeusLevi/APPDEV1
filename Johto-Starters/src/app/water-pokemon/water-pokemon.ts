import { Component, inject, OnInit } from '@angular/core';
import { WaterPokemonService } from '../water-pokemon-service';

@Component({
  selector: 'app-water-pokemon',
  standalone: false,
  templateUrl: './water-pokemon.html',
  styleUrls: ['./water-pokemon.css'],
})
export class WaterPokemon implements OnInit {
  waterService = inject(WaterPokemonService);
  currentPokemon: any = null;
  currentName: string = 'Totodile';
  type = this.waterService.type;

  ngOnInit(): void {
    this.currentPokemon = this.waterService.getPokemon(this.currentName);
    this.type = this.waterService.type;
  }

  evolve(): void {
    const next = this.waterService.getNext(this.currentName);
    if (next) {
      this.currentName = next;
      this.ngOnInit();
    }
  }

  revert(): void {
    const prev = this.waterService.getPrev(this.currentName);
    if (prev) {
      this.currentName = prev;
      this.ngOnInit();
    }
  }
}
