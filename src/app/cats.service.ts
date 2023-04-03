import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Cat {
  id: number;
  name: string;
  url: string;
  isFavourite?: boolean;
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
    return this.http.post('/api/favourites', {
      catId,
    });
  }

  removeFromFavourites(catId: number) {
    return this.http.delete('/api/favourites', { body: { catId } });
  }

  addToLocalFavourites(id: number) {
    const favouritesString = localStorage.getItem('favourites');
    if (favouritesString) {
      const favourites: number[] = JSON.parse(favouritesString);
      if (!favourites.some(favourite => favourite === id)) favourites.push(id);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    } else {
      localStorage.setItem('favourites', JSON.stringify([id]));
    }
  }

  getLocalFavourites() {
    const favouritesString = localStorage.getItem('favourites');
    if (favouritesString) {
      const favourites: number[] = JSON.parse(favouritesString);
      return favourites;
    }
    return [];
  }

  isInLocalFavourites(id: number) {
    const favouritesString = localStorage.getItem('favourites');
    if (favouritesString) {
      const favourites: number[] = JSON.parse(favouritesString);
      return Boolean(favourites.find(favourite => favourite === id));
    }
    return false;
  }

  addLocalFavouritesToFavourites() {
    console.log('runnung addtoLoc');
    const localFavourites = this.getLocalFavourites();
    let serverFavourites: number[] = [];
    this.getFavourites().subscribe(favouriteCats => {
      console.log(favouriteCats);
      serverFavourites = favouriteCats.cats.map(cat => cat.id);
      if (localFavourites.length > 0) {
        console.log(serverFavourites);
        const difference = localFavourites.filter(
          favourite => !serverFavourites.includes(favourite),
        );
        console.log(difference);
        if (difference.length > 0)
          difference.forEach(favouriteId =>
            this.addToFavourites(favouriteId).subscribe(),
          );
      }
      console.log('done with sub');
    });
  }
}
