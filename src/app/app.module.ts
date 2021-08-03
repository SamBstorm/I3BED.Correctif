import { ExerciceModule } from './exercice/exercice.module';
import { DemoModule } from './demo/demo.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule,
    ExerciceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
