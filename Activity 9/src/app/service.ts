import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor() {}

  getFalkner() {
    return {
      name: 'Falkner',
      type: 'Type: Flying',
      badge: 'Zephyr Badge',
      description:
        'In Violet City, he stands as a disciplined young leader, carrying on his family’s legacy while watching over the rooftops from the Gym’s high tower.',
      pokemon: ['Pidgey - Level 9', 'Pidgeotto - Level 13']
    };
  }

  getBugsy() {
    return {
      name: 'Bugsy',
      type: 'Type: Bug',
      badge: 'Hive Badge',
      description:
        'Living in Azalea Town, he’s a curious scholar who spends his days studying nature and making discoveries near the mysterious Ilex Forest.',
      pokemon: ['Metapod - Level 15', 'Kakuna - Level 15', 'Scyther - Level 17']
    };
  }

  getWhitney() {
    return {
      name: 'Whitney',
      type: 'Type: Normal',
      badge: 'Plain Badge',
      description:
        'In the heart of bustling Goldenrod City, she’s energetic and playful, her spirit matching the city’s lively pace. Outside the city, she tends to her ranch, a calm retreat where she connects with her Pokémon away from the noise.',
      pokemon: ['Clefairy - Level 17', 'Miltank - Level 19']
    };
  }

  getMorty() {
    return {
      name: 'Morty',
      type: 'Type: Ghost',
      badge: 'Fog Badge',
      description:
        'In the historic Ecruteak City, he embodies the town’s mystical aura, reflecting deeply on its ancient legends and spiritual heritage.',
      pokemon: ['Gastly - Level 21', 'Haunter - Level 21', 'Haunter - Level 23', 'Gengar - Level 25']
    };
  }

  getChuck() {
    return {
      name: 'Chuck',
      type: 'Type: Fighting',
      badge: 'Storm Badge',
      description:
        'On the shores of Cianwood City, he’s boisterous and hearty, dedicating himself to intense training while enjoying the calm and simplicity of his seaside home.',
      pokemon: ['Primeape - Level 29', 'Poliwrath - Level 31']
    };
  }

  getJasmine() {
    return {
      name: 'Jasmine',
      type: 'Type: Steel',
      badge: 'Mineral Badge',
      description:
        'In the port of Olivine City, her gentle kindness extends to both her community and the lighthouse that guides sailors to safety.',
      pokemon: ['Magnemite - Level 30', 'Magnemite - Level 30', 'Steelix - Level 35']
    };
  }

  getPryce() {
    return {
      name: 'Pryce',
      type: 'Type: Ice',
      badge: 'Glacier Badge',
      description:
        'Among the snowy quiet of Mahogany Town, he’s a wise elder whose calm strength is respected by the people of the village.',
      pokemon: ['Seel - Level 30', 'Dewgong - Level 32', 'Piloswine - Level 34']
    };
  }

  getClair() {
    return {
      name: 'Clair',
      type: 'Type: Dragon',
      badge: 'Rising Badge',
      description:
        'In the mountainous Blackthorn City, she is a fierce and determined guardian of the skies, embodying the strength and majesty of dragonkind.',
      pokemon: ['Dragonair - Level 38', 'Dragonair - Level 38', 'Gyarados - Level 38', 'Kingdra - Level 40']
    };
  }

  getHome() {
    return {
      welcome: 'Welcome to the Johto Region!',
      lore: 'The Johto Region, lying west of Kanto, is a land steeped in tradition, legends, and harmony between humans and Pokémon. Known for its ancient towers, shrines, and myths of legendary creatures, Johto embodies a balance between the old and the new. Cities like Ecruteak preserve stories of fire, rain, and rebirth, while Goldenrod thrives as a bustling hub of commerce and technology. Johto’s landscape flows from serene forests and mystical caves to snowy mountains and peaceful seaside towns, each holding a deep cultural connection to its people and Pokémon.',
      falkner: 'Falkner',
      bugsy: 'Bugsy',
      whitney: 'Whitney',
      morty: 'Morty',
      chuck: 'Chuck',
      jasmine: 'Jasmine',
      pryce: 'Pryce',
      clair: 'Clair'
    };
  }
}
