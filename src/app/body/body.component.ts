import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

colors: string [] = ['red','blue','yellow','green','purple','orange']
currentColorIndex: number = 0;

changeNameColor(){
  this.currentColorIndex = (this.currentColorIndex +1) % this.colors.length;
}

get currentColor(): string {
  return this.colors
  [this.currentColorIndex]
}

  profile = {
    name: 'Zeus Levi C. Zapanta',
    title: 'Unli Wings Connoseur',
    about: 'The one and only, you know what it is.',
    skills: 
    ['Angular', 'Typescript', 'HTML/CSS', 'Responsive Design'],
  
    experience: [
      {
      role: 'Chicken Eater',
      company: 'Chicken Wing Reviwers',
      period: '2024-present',
      description: 'wut'
      },
      {
        role: 'Frontend Intern',
        company: 'Digital Creations',
        period: '2021 - 2022',
        description: 'wut'
      },

    ],
    education: {
      degree: 'bisaya',
      school: 'ub',
      year: '2024' 
    },
    contact: {
    email: 'ub',
    phone: '09',
    location: 'baguio'
    }
  }
  }
