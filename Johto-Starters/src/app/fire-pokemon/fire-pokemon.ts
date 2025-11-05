import { Component, inject, OnInit } from '@angular/core';
import { FirePokemonService } from '../fire-pokemon-service';

@Component({
  selector: 'app-fire-pokemon',
  standalone: false,
  templateUrl: './fire-pokemon.html',
  styleUrls: ['./fire-pokemon.css'],
})
export class FirePokemon implements OnInit {
  fireService = inject(FirePokemonService);
  currentPokemon: any = null;
  currentName: string = 'Cyndaquil';
  type = this.fireService.type;

  ngOnInit(): void {
    this.currentPokemon = this.fireService.getPokemon(this.currentName);
    this.type = this.fireService.type;
  }

  evolve(): void {
    const next = this.fireService.getNext(this.currentName);
    if (next) {
      this.currentName = next;
      this.ngOnInit();
    }
  }

  revert(): void {
    const prev = this.fireService.getPrev(this.currentName);
    if (prev) {
      this.currentName = prev;
      this.ngOnInit();
    }
  }
}
