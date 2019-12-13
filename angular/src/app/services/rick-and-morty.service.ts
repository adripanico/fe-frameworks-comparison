import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface IRamPaginatedCharacters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: IRamCharacter[];
}

export interface IRamCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

@Injectable()
export class RickAndMortyService {
  constructor(private http: HttpClient) {
    // nothing to see here
  }

  public getCharacters(): Observable<IRamPaginatedCharacters> {
    return this.http.get<IRamPaginatedCharacters>('https://rickandmortyapi.com/api/character/');
  }
}
