import { Component } from '@angular/core';

@Component({
  selector: 'app-taoteching',
  standalone: false,
  templateUrl: './taoteching.component.html',
  styleUrl: './taoteching.component.css'
})
export class TaotechingComponent {
  stoicPhilosophy = [
    {
      book: 'Quote 1',
      body: 'To the mind that is still, the whole universe surrenders.'
    },
    {
      book: 'Quote 2',
      body: 'Nature does not hurry, yet everything is accomplished.'
    },
    {
      book: 'Quote 3',
      body: 'The Master has no possessions. The more he does for others, the happier he is. The more he gives to others, the wealthier he is.'
    },
    {
      book: 'Quote 4',
      body: 'If you realize that you have enough, you are truly rich.'
    },
    {
      book: 'Quote 5',
      body: 'The wise man is one who, knows, what he does not know.'
    }
  ]

  currentIndex: number = 0;
  currentQuote = this.stoicPhilosophy[0];

  increment() {
    if (this.currentIndex < this.stoicPhilosophy.length - 1) {
      this.currentIndex++;
      this.currentQuote = this.stoicPhilosophy[this.currentIndex];
    }
    else if(this.currentIndex == this.stoicPhilosophy.length - 1){
      this.currentIndex = 0;
      this.currentQuote = this.stoicPhilosophy[this.currentIndex];
    }

  }

  decrement() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentQuote = this.stoicPhilosophy[this.currentIndex];
    }
    if(this.currentIndex == 0){
      this.currentIndex = this.stoicPhilosophy.length - 1;
      this.currentQuote = this.stoicPhilosophy[this.currentIndex];
    }
  }

}
