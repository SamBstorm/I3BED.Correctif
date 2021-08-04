import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChronoFormatPipe } from './Pipes/chrono-format.pipe';



@NgModule({
  declarations: [
    ChronoFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChronoFormatPipe
  ]
})
export class SharedModule { }
