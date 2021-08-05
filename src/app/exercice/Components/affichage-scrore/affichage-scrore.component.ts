import { ScoreService } from './../../Services/score.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affichage-scrore',
  templateUrl: './affichage-scrore.component.html',
  styleUrls: ['./affichage-scrore.component.scss']
})
export class AffichageScroreComponent implements OnInit {

  public get teamNames():string[] { return this._scoreService.teamNames;}

  constructor(private _scoreService : ScoreService) { }

  ngOnInit(): void {
  }

}
