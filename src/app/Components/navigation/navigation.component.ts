import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/Models/link';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public links : Link[];

  constructor() {
    this.links = [];
  }

  ngOnInit(): void {
    this.links.push(new Link('Demo','/demo'));
    this.links.push(new Link('------'));
    this.links.push(new Link('Exercices','/exercice',[      
      new Link('------'),
      new Link('Chronomètre','/chrono'),    
      new Link('Chronomètre avec fonction Start, Pause et reset'),
    ]));
  }

}
