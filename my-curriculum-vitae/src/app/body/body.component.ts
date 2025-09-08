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
    title: 'Second Year Student',
    about: 'Future Computer Scientist',
    skills: 
    ['Angular', 'Typescript', 'HTML/CSS', 'Responsive Design'],
  
    experience: [
      {
      award: 
      ['Consistent With Honors', 'Best in Research', 'Best in Math'],
      role: 'Blogger',
      company: 'Facebook',
      period: '2024-present',
      description: 'Blogging on unli wings around baguio.',
      },
    ],

    education: 
      {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Baguio',
      year: '2024 - present', 
      diploma: 'Diploma for Highschool and Senior Highschool',
      highschool: 'Baguio City National Highschool',
      years: '2018 - 2024'
      },
    
    courses: 
      {
        degree: 'Bachelor of Science in Computer Science',
        course1: 'GETHICS | Aira Palisoc',
        course2: 'DSALGO1 | Cherrie Almazan',
        course3: 'APPDEV1 | Jeremy Ebreo',
        course4: 'IMDBSE1 | Divine Augilar-Agudong',
        course5: 'PROGIT2 | Meynard Soriano',
        course6: 'DITRUC2 | Jeremy Ebreo',
        course7: 'ITMGNT1 | Hydi Toyeng',
        course8: 'BOWLING | Lorie Daodao',
      },

    
    

    contact: 
      {
      email: '20240821@s.ubaguio.edu',
      phone: '09289223228',
      location: '#174 Liteng Pacdal, Baguio City'
      }
  }
  }

