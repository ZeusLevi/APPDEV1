import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeballsService {
  getPokeballs() {
    return[
      {img: "FastBall.png",name: "Fast Ball", description: "Works best on Pokemon that flee or move quickly."},
      {img: "LevelBall.png",name: "Level Ball", description: "More effective on lower-level Pokemon compared to your own."},
      {img: "LureBall.png",name: "Lure Ball", description: "Works better on Pokemon hooked while fishing."},
      {img: "HeavyBall.png",name: "Heavy Ball", description: "More effective on heavier Pokemon."},
      {img: "LoveBall.png",name: "Love Ball", description: "Works best on Pokemon of the opposite gender to yours."},
      {img: "FriendBall.png",name: "Friend Ball", description: "Makes caught Pokemon more friendly toward you."},
      {img: "MoonBall.png",name: "Moon Ball", description: "Works well on Pokemon that evolve with a Moon Stone."},
      {img: "SportBall.png",name: "Sport Ball", description: "Used during the Bug-Catching Contest; has average catch rate."},
      {img: "GSBall.png",name: "GS Ball", description: "A mysterious Poke Ball with unknown purpose."},
    ]
  }
}