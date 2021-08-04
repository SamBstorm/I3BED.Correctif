import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  public seconds : number = 0;
  private _timer : any;
  public timerIsActive : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public btn_play(){
    this._timer = setInterval(
      () => this.addOneSecond(),
      1000);
    this.timerIsActive = true;
  }

  public btn_pause(){
    if(this._timer !== undefined) clearInterval(this._timer);
    this.timerIsActive = false;
  }

  public btn_reset(){
    this.btn_pause();
    this.seconds = 0;
  }

  private addOneSecond(){
    this.seconds++;
  }

}
