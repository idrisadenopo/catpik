import { Component } from '@angular/core';
import { Cat, CatsService } from '../cats.service';

@Component({
  selector: 'app-cats-display',
  templateUrl: './cats-display.component.html',
  styleUrls: ['./cats-display.component.scss'],
})
export class CatsDisplayComponent {
  constructor(public catsService: CatsService) {}

  cats: Cat[] | undefined;

  ngOnInit() {
    this.showCats();
    this.catsService.getFavourites().subscribe();
  }

  showCats() {
    this.catsService.getRandomCats().subscribe(cats => (this.cats = cats.cats));
  }
}
