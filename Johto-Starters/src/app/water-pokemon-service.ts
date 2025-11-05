import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterPokemonService {
  type = 'Water';

  private pokemons: { [key: string]: any } = {
    Totodile: {
      name: 'Totodile',
      hp: 50,
      attack: 65,
      defense: 64,
      sp_attack: 44,
      sp_defense: 48,
      speed: 43,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png'
    },
    Croconaw: {
      name: 'Croconaw',
      hp: 65,
      attack: 80,
      defense: 80,
      sp_attack: 59,
      sp_defense: 63,
      speed: 58,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png'
    },
    Feraligatr: {
      name: 'Feraligatr',
      hp: 85,
      attack: 105,
      defense: 100,
      sp_attack: 79,
      sp_defense: 83,
      speed: 78,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png'
    }
  };

  getPokemon(name: string) {
    return this.pokemons[name];
  }

  getNext(name: string): string | null {
    if (name === 'Totodile') return 'Croconaw';
    if (name === 'Croconaw') return 'Feraligatr';
    return null;
  }

  getPrev(name: string): string | null {
    if (name === 'Feraligatr') return 'Croconaw';
    if (name === 'Croconaw') return 'Totodile';
    return null;
  }
}