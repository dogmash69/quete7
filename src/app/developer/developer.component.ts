import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  
  public devs : Developer[];

  constructor() {
    this.devs = [
      new Developer ('Scott', 'Mickael', 45 , 'male', 'Dunder mifflin manager', [ new Skill ('Parkour', 'Logo parkour', 'Site parkour'), new Skill ('BLABLA', 'LOGO BLABLA', 'SITE BLABLA')]),
      new Developer ('Dwight', 'Schrute', 39 , 'male', 'Dunder mifflin assistant manager', [ new Skill ('hunt', 'LOGO hunt', 'SITE hunt'), new Skill ('Parkour', 'LOGO Parkour', 'SITE Parkour')])
    ]
  }

  ngOnInit(): void {
  }

}
