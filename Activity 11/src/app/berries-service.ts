import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BerriesService {
  getBerries() {
    return[
      {name: 'Berry', held: "If the holder's HP falls below 50%, it will consume its held Berry and restore 10 HP.", bag: "When used from the Bag on a Pokémon, it restores 10 HP to that Pokémon. This consumes the Berry."},
      {name: 'Bitter Berry', held: "If the holder is confused, it will consume its held Bitter Berry and be cured of confusion.", bag: "When used from the Bag on a Pokémon, it cures that Pokémon of confusion. This consumes the Bitter Berry."},
      {name: 'Burnt Bery', held: "If the holder is frozen, it will consume its held Burnt Berry and be cured of freeze.", bag: "When used from the Bag on a Pokémon, it cures that Pokémon of freeze. This consumes the Burnt Berry."},
      {name: 'Gold Berry', held: "If the holder's HP falls below 50%, it will consume its held Gold Berry and restore 30 HP.", bag: "When used from the Bag on a Pokémon, it restores 30 HP to that Pokémon. This consumes the Gold Berry."},
      {name: 'Ice Berry', held: "If the holder is burned, it will consume its held Ice Berry and be cured of burn.", bag: "When used from the Bag on a Pokémon, it cures that Pokémon of burn. This consumes the Ice Berry."},
      {name: 'Mint Berry', held: "If the holder is asleep, it will consume its held Mint Berry and be cured of sleep.", bag: "When used from the Bag on a Pokémon, it cures that Pokémon of sleep. This consumes the Mint Berry."},
      {name: 'MiracleBerry', held: "If the holder has a non-volatile status condition or confusion, it will consume its held MiracleBerry and be cured of it.", bag: "When used from the Bag on a Pokémon, it cures that Pokémon of all non-volatile status conditions and confusion. This consumes the MiracleBerry."},
      {name: 'MysteryBerry', held: "If one of the holder's moves runs out of PP, it consumes its held MysteryBerry and 5 PP is restored to that move.", bag: "When used from the Bag on a Pokémon, it restores 5 PP to one of that Pokémon's moves. This consumes the MysteryBerry."},
      {name: 'PRZCureBerry', held: "If the holder is paralyzed, it will consume its held PRZCureBerry and cure itself of paralysis.", bag: "When used from the Bag on a Pokémon, it cures that Pokémon of paralysis. This consumes the PRZCureBerry."},
      {name: 'PSNCureBerry', held: "If the holder is poisoned, it will consume its held PSNCureBerry and cure it of poison.", bag: "When used from the Bag on a Pokémon, it cures that Pokémon of poison. This consumes the PSNCureBerry."},
    ]
  }
}
