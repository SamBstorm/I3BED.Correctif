import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { ChronoComponent } from './Components/chrono/chrono.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChronoComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ],
  bootstrap : [HomeComponent]
})
export class ExerciceModule { }
