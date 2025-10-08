import { Component, signal } from '@angular/core';

import { Gym1 } from './gym1/gym1';
import { Gym2 } from './gym2/gym2';
import { Gym3 } from './gym3/gym3';
import { Gym4 } from './gym4/gym4'; 
import { Gym5 } from './gym5/gym5';
import { Gym6 } from './gym6/gym6';
import { Gym7 } from './gym7/gym7';
import { Gym8 } from './gym8/gym8';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  Title = 'Activity-8';

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
    } else {
      this.Title = "Home";
    }
  }
}
