import { Component, OnInit, Input } from '@angular/core';
import { CharactersApiService } from './shared/characters-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  
  @Input() name: string;

  
  constructor(private characterSvc: CharactersApiService) { }

  allCharacters: Observable<any>;
  comicsCharacter: Observable<any>;
  
  ngOnInit() {
    this.getCharacters(this.name);
  }
  
  getCharacters(name) {
    this.allCharacters = this.characterSvc.getAllCharacters(name);
  }

}
