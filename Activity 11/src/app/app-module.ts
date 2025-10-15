import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Sidebar } from './sidebar/sidebar';
import { Gym1 } from './gym1/gym1';
import { Gym2 } from './gym2/gym2';
import { Gym3 } from './gym3/gym3';
import { Gym4 } from './gym4/gym4';
import { Gym5 } from './gym5/gym5';
import { Gym6 } from './gym6/gym6';
import { Gym7 } from './gym7/gym7';
import { Gym8 } from './gym8/gym8';
import { Home } from './home/home';
import { TrainerForm } from './trainer-form/trainer-form';
import { Berries } from './berries/berries';
import { Pokeballs } from './pokeballs/pokeballs';

@NgModule({
  declarations: [
    App,
    Sidebar,
    Gym1,
    Gym2,
    Gym3,
    Gym4,
    Gym5,
    Gym6,
    Gym7,
    Gym8,
    Home,
    Berries,
    Pokeballs,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    TrainerForm
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
