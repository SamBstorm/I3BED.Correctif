import { ScoreService } from './../../Services/score.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  @Input() teamName : string = "";

  constructor(private _scoreService : ScoreService) { }

  ngOnInit(): void {
  }

  public addOnePoint() {
    this._scoreService.addOneTo(this.teamName);
  }

}
