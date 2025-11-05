import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirePokemonService {
  type = 'Fire';

  private pokemons: { [key: string]: any } = {
    Cyndaquil: {
      name: 'Cyndaquil',
      hp: 39,
      attack: 52,
      defense: 43,
      sp_attack: 60,
      sp_defense: 50,
      speed: 65,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png'
    },
    Quilava: {
      name: 'Quilava',
      hp: 58,
      attack: 64,
      defense: 58,
      sp_attack: 80,
      sp_defense: 65,
      speed: 80,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png'
    },
    Typhlosion: {
      name: 'Typhlosion',
      hp: 78,
      attack: 84,
      defense: 78,
      sp_attack: 109,
      sp_defense: 85,
      speed: 100,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png'
    }
  };

  getPokemon(name: string) {
    return this.pokemons[name];
  }

  getNext(name: string): string | null {
    if (name === 'Cyndaquil') return 'Quilava';
    if (name === 'Quilava') return 'Typhlosion';
    return null;
  }

  getPrev(name: string): string | null {
    if (name === 'Typhlosion') return 'Quilava';
    if (name === 'Quilava') return 'Cyndaquil';
    return null;
  }
}
