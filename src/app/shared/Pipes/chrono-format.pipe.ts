import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoFormat'
})
export class ChronoFormatPipe implements PipeTransform {

  transform(value: number): string {    
    let seconds = value % 60;
    let minutes = (value - seconds)/ 60;
    return `${(minutes < 10)?'0'+minutes:minutes}:${(seconds < 10)?'0'+seconds:seconds}`;
  }

}
