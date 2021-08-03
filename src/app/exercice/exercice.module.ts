import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { HomeComponent } from './Components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule
  ],
  bootstrap : [HomeComponent]
})
export class ExerciceModule { }
