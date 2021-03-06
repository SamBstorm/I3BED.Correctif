import { AffichageScroreComponent } from './Components/affichage-scrore/affichage-scrore.component';
import { ChronoComponent } from './Components/chrono/chrono.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component : HomeComponent, children : [
    {path:'chrono',component : ChronoComponent},
    {path:'score',component : AffichageScroreComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
