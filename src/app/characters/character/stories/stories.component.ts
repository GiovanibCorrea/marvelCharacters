import { Component, OnInit, Input } from '@angular/core';
import { StoriesApiService } from './../shared/stories-api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  
  @Input() id: Number;

  constructor(private storiesSvc: StoriesApiService) { }

  comicsCharacter: Observable<any>;
  
  ngOnInit() {
    this.getComics(this.id);
  }
  
  getComics(id) {
    this.comicsCharacter = this.storiesSvc.getComics(id);
  }

}
