import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeditationsComponent } from './meditations/meditations.component';
import { TaotechingComponent } from './taoteching/taoteching.component';

const routes: Routes = [
  {path: '', redirectTo: '/meditations', pathMatch: 'full'},
  {path: 'meditations', component: MeditationsComponent},
  {path: 'taoteching', component: TaotechingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
