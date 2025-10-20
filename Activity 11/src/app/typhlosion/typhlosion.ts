import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-typhlosion',
  imports: [
    CommonModule,
    TitleCasePipe,
    MatDividerModule
  ],
  templateUrl: './typhlosion.html',
  styleUrl: './typhlosion.css'
})
export class Typhlosion {
  pokemon: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/typhlosion').subscribe(
      response => this.pokemon = response,
      error => console.error('Error:', error)
    );
  }
}
