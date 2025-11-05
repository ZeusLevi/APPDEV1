import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrassPokemonService {
  type = 'Grass';

  private pokemons: { [key: string]: any } = {
    Chikorita: {
      name: 'Chikorita',
      hp: 45,
      attack: 49,
      defense: 65,
      sp_attack: 49,
      sp_defense: 65,
      speed: 45,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png'
    },
    Bayleef: {
      name: 'Bayleef',
      hp: 60,
      attack: 62,
      defense: 80,
      sp_attack: 63,
      sp_defense: 80,
      speed: 60,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png'
    },
    Meganium: {
      name: 'Meganium',
      hp: 80,
      attack: 82,
      defense: 100,
      sp_attack: 83,
      sp_defense: 100,
      speed: 80,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png'
    }
  };

  getPokemon(name: string) {
    return this.pokemons[name];
  }

  getNext(name: string): string | null {
    if (name === 'Chikorita') return 'Bayleef';
    if (name === 'Bayleef') return 'Meganium';
    return null;
  }

  getPrev(name: string): string | null {
    if (name === 'Meganium') return 'Bayleef';
    if (name === 'Bayleef') return 'Chikorita';
    return null;
  }
}
