import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VegetableService {
  getVegetables() {
    return [
    { name: 'carrot', color: 'orange' },
    { name: 'tomato', color: 'red' },
    { name: 'spinach', color: 'green' },
    { name: 'pepper', color: 'green' },
    { name: 'cucumber', color: 'green' },
    { name: 'broccoli', color: 'green' },
    { name: 'cauliflower', color: 'white' },
    { name: 'onion', color: 'white' }
    ]
  }
}