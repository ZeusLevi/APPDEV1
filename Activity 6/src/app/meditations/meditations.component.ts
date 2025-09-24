import { Component } from '@angular/core';

@Component({
  selector: 'app-meditations',
  standalone: false,
  templateUrl: './meditations.component.html',
  styleUrl: './meditations.component.css'
})
export class MeditationsComponent {
  stoicPhilosophy = [
    {
      book: 'Book 1',
      body: 'You have power over your mind - not outside events. Realize this, and you will find strength.'
    },
    {
      book: 'Book 2',
      body: 'The happiness of your life depends upon the quality of your thoughts.'
    },
    {
      book: 'Book 3',
      body: 'Waste no more time arguing what a good man should be. Be one.'
    },
    {
      book: 'Book 4',
      body: 'The best revenge is to be unlike him who performed the injury.'
    },
    {
      book: 'Book 5',
      body: 'The soul becomes dyed with the color of its thoughts.'
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
