import { Component, signal } from '@angular/core';

import { Gym1 } from './gym1/gym1';
import { Gym2 } from './gym2/gym2';
import { Gym3 } from './gym3/gym3';
import { Gym4 } from './gym4/gym4'; 
import { Gym5 } from './gym5/gym5';
import { Gym6 } from './gym6/gym6';
import { Gym7 } from './gym7/gym7';
import { Gym8 } from './gym8/gym8';
import { TrainerForm } from './trainer-form/trainer-form';
import { Berries } from './berries/berries';
import { Pokeballs } from './pokeballs/pokeballs';
import { Typhlosion } from './typhlosion/typhlosion';
import { Crobat } from './crobat/crobat';
import { Quagsire } from './quagsire/quagsire';
import { Hitmontop } from './hitmontop/hitmontop';
import { Espeon } from './espeon/espeon';
import { Tyranitar } from './tyranitar/tyranitar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  Title = 'Activity-11';

  onRouteActivate(component: any) {
    if (component instanceof Gym1) {
      this.Title = "Gym 1 - Falkner";
    } else if (component instanceof Gym2) {
      this.Title = "Gym 2 - Bugsy";
    } else if (component instanceof Gym3) {
      this.Title = "Gym 3 - Whitney";
    } else if (component instanceof Gym4) {
      this.Title = "Gym 4 - Morty";
    } else if (component instanceof Gym5) {
      this.Title = "Gym 5 - Chuck";
    } else if (component instanceof Gym6) {
      this.Title = "Gym 6 - Jasmine";
    } else if (component instanceof Gym7) {
      this.Title = "Gym 7 - Pryce";
    } else if (component instanceof Gym8) {
      this.Title = "Gym 8 - Clair";
    } else if (component instanceof TrainerForm) {
      this.Title = "Trainer Form";
    } else if (component instanceof Berries) {
      this.Title = "Berries";
    } else if (component instanceof Pokeballs) {
      this.Title = "Pokeballs"
    } else if (component instanceof Typhlosion) {
      this.Title = "Typhlosion"
    } else if (component instanceof Crobat) {
      this.Title = "Crobat"
    } else if (component instanceof Quagsire) {
      this.Title = "Quagsire"
    } else if (component instanceof Hitmontop) {
      this.Title = "Hitmontop"
    } else if (component instanceof Espeon) {
      this.Title = "Espeon"
    } else if (component instanceof Tyranitar) {
      this.Title = "Tyranitar"
    } else {
      this.Title = "Home";
    }
  }
}
