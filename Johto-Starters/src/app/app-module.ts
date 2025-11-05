import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { WaterPokemon } from './water-pokemon/water-pokemon';
import { FirePokemon } from './fire-pokemon/fire-pokemon';
import { GrassPokemon } from './grass-pokemon/grass-pokemon';

@NgModule({
  declarations: [
    App,
    WaterPokemon,
    FirePokemon,
    GrassPokemon,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
