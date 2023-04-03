import { Component, OnInit } from '@angular/core';
import { Cat, CatsService } from '../cats.service';
import { Observable, Subject, Subscription, from, of, pipe } from 'rxjs';

@Component({
  selector: 'app-cats-display',
  templateUrl: './cats-display.component.html',
  styleUrls: ['./cats-display.component.scss'],
})
export class CatsDisplayComponent implements OnInit {
  constructor(public catsService: CatsService) {}

  cats: Cat[] | undefined;

  // TODO: make calls run in sequence
  async ngOnInit() {
    this.catsService.addLocalFavouritesToFavourites();
    this.showCats();
  }

  showCats() {
    console.log('running showcats');
    this.catsService.getRandomCats().subscribe(cats => (this.cats = cats.cats));
  }
}
