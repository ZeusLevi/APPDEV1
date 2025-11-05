import { Component, inject, OnInit } from '@angular/core';
import { GrassPokemonService } from '../grass-pokemon-service';

@Component({
  selector: 'app-grass-pokemon',
  standalone: false,
  templateUrl: './grass-pokemon.html',
  styleUrls: ['./grass-pokemon.css'],
})
export class GrassPokemon implements OnInit {
  grassService = inject(GrassPokemonService);
  currentPokemon: any = null;
  currentName: string = 'Chikorita';
  type = this.grassService.type;

  ngOnInit(): void {
    this.currentPokemon = this.grassService.getPokemon(this.currentName);
    this.type = this.grassService.type;
  }

  evolve(): void {
    const next = this.grassService.getNext(this.currentName);
    if (next) {
      this.currentName = next;
      this.ngOnInit();
    }
  }

  revert(): void {
    const prev = this.grassService.getPrev(this.currentName);
    if (prev) {
      this.currentName = prev;
      this.ngOnInit();
    }
  }
}
