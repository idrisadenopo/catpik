import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, lastValueFrom, of, throwError } from 'rxjs';
import { environment } from '../environments/environment';

export interface Cat {
  id: number;
  name: string;
  imageData: {
    urlPath: string;
    width: number;
    height: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  getRandomCats() {
    return this.http.get<{ cats: Cat[] }>(this.baseUrl + '/cats');
  }

  getFavourites() {
    return this.http.get<{ cats: Cat[] }>(this.baseUrl + '/cats/favourites');
  }

  getRandomCat() {
    return this.http.get<Cat>(this.baseUrl + '/cats/cat');
  }

  addToFavourites(catId: number) {
    return this.http
      .post<{ id: string; catId: number }>(this.baseUrl + '/favourites', {
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
    return this.http.delete(this.baseUrl + '/favourites', {
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

  async getLocalServerFavouritesDiff() {
    const localFavourites = this.getLocalFavourites();
    let serverFavourites: number[] = [];
    const favouriteCats = await lastValueFrom(this.getFavourites());

    serverFavourites = favouriteCats.cats.map(cat => cat.id);
    if (localFavourites.length > 0) {
      const difference = localFavourites.filter(
        favourite => !serverFavourites.includes(favourite),
      );
      return difference;
    }
    return [];
  }

  async syncLocalServerFavourites() {
    const diff = await this.getLocalServerFavouritesDiff();
    if (diff.length === 0) return;
    for (let index = 0; index < diff.length; index++) {
      this.addToFavourites(diff[index]).subscribe();
    }
    return;
  }
}
