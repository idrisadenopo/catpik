import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

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

  baseUrl = process.env['BASE_URL'] || '';

  getRandomCats() {
    return this.http.get<{ cats: Cat[] }>(this.baseUrl + '/api/cats');
  }

  getFavourites() {
    return this.http.get<{ cats: Cat[] }>(
      this.baseUrl + '/api/cats/favourites',
    );
  }

  getRandomCat() {
    return this.http.get<Cat>(this.baseUrl + '/api/cats/cat');
  }

  addToFavourites(catId: number) {
    return this.http
      .post(this.baseUrl + '/api/favourites', {
        catId,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (Number(error.status) === 409)
            return throwError(() => new Error('tried faving cat'));
          return throwError(() => new Error());
        }),
      );
  }

  removeFromFavourites(catId: number) {
    return this.http.delete(this.baseUrl + '/api/favourites', {
      body: { catId },
    });
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

  async addLocalFavouritesToFavourites() {
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
