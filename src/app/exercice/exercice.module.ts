import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { ChronoComponent } from './Components/chrono/chrono.component';
import { AffichageScroreComponent } from './Components/affichage-scrore/affichage-scrore.component';
import { ScroreComponent } from './Components/scrore/scrore.component';
import { EquipeComponent } from './Components/equipe/equipe.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChronoComponent,
    AffichageScroreComponent,
    ScroreComponent,
    EquipeComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ],
  bootstrap : [HomeComponent]
})
export class ExerciceModule { }
