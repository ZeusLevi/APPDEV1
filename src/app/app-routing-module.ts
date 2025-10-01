import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Gym1 } from './gym1/gym1';
import { Gym2 } from './gym2/gym2';
import { Gym3 } from './gym3/gym3';
import { Gym4 } from './gym4/gym4';
import { Gym5 } from './gym5/gym5';
import { Gym6 } from './gym6/gym6';
import { Gym7 } from './gym7/gym7';
import { Gym8 } from './gym8/gym8';
import { Home } from './home/home'


const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'gym1', component: Gym1 },
  { path: 'gym2', component: Gym2 },
  { path: 'gym3', component: Gym3 },
  { path: 'gym4', component: Gym4 },
  { path: 'gym5', component: Gym5 },
  { path: 'gym6', component: Gym6 },
  { path: 'gym7', component: Gym7 },
  { path: 'gym8', component: Gym8 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
