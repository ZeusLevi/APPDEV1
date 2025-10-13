import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeballsService {
  getPokeballs() {
    return[
      {name: "Fast Ball", description: ""},
      {name: "Level Ball", description: ""},
      {name: "Lure Ball", description: ""},
      {name: "Heavy Ball", description: ""},
      {name: "Love Ball", description: ""},
      {name: "Friend Ball", description: ""},
      {name: "Moon Ball", description: ""},
      {name: "Sport Ball", description: ""},
      {name: "GS Ball", description: ""},
      
    ]
  }
  
}
