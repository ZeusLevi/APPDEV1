import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruits() {
    return[

    {name: 'apple', color: 'red'},
    {name: 'banana', color: 'yellow'},
    {name: 'orange', color: 'orange'},
    {name: 'lemon', color: 'yellow'},
    {name: 'grape', color: 'purple'},
    {name: 'kiwi', color: 'green'},
    {name: 'pineapple', color: 'yellow'},
    {name: 'strawberry', color: 'red'}
    ]
  }
}
