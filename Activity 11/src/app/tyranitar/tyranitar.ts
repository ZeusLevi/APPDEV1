import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-tyranitar',
  imports: [
    CommonModule,
    TitleCasePipe,
    MatDividerModule
  ],
  templateUrl: './tyranitar.html',
  styleUrls: ['./tyranitar.css']
})
export class Tyranitar {
  pokemon: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/tyranitar').subscribe(
      response => this.pokemon = response,
      error => console.error('Error:', error)
    );
  }
}
