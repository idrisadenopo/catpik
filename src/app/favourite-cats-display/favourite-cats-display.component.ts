import { Component, OnInit } from '@angular/core';
import { Cat, CatsService } from '../cats.service';

@Component({
  selector: 'app-favourite-cats-display',
  templateUrl: './favourite-cats-display.component.html',
  styleUrls: ['./favourite-cats-display.component.scss'],
})
export class FavouriteCatsDisplayComponent implements OnInit {
  constructor(private catsService: CatsService) {}

  cats: Cat[] | undefined;

  ngOnInit() {
    this.showFavouriteCats();
  }

  showFavouriteCats() {
    this.catsService.getFavourites().subscribe(cats => (this.cats = cats.cats));
  }
}
