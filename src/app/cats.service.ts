import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Cat {
  id: number;
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor(private http: HttpClient) {}

  getRandomCats() {
    return this.http.get<{ cats: Cat[] }>('/api/cats');
  }

  getFavourites() {
    return this.http.get<{ cats: Cat[] }>('/api/cats/favourites');
  }

  getRandomCat() {
    return this.http.get<Cat>('/api/cats/cat');
  }

  addToFavourites(catId: number) {
    console.log('adding from ..');
    return this.http.post('/api/favourites', {
      catId,
    });
  }
}
