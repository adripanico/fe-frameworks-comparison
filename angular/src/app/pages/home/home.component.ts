import { Component, OnInit } from '@angular/core';
import { RickAndMortyService, IRamCharacter, IRamPaginatedCharacters } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {

  characters: IRamCharacter[] = [];

  constructor(private ramService: RickAndMortyService) {
    // nothing to see here
  }

  ngOnInit() {
    this.ramService.getCharacters().subscribe((page: IRamPaginatedCharacters) => {
      this.characters = page.results;
    });
  }

}
