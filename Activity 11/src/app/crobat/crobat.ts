import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-crobat',
  imports: [
    CommonModule,
    TitleCasePipe,
    MatDividerModule
  ],
  templateUrl: './crobat.html',
  styleUrls: ['./crobat.css']
})
export class Crobat {
  pokemon: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/crobat').subscribe(
      response => this.pokemon = response,
      error => console.error('Error:', error)
    );
  }
}
