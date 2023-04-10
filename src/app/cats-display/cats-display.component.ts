import { Component, OnInit } from '@angular/core';
import { Cat, CatsService } from '../cats.service';

@Component({
  selector: 'app-cats-display',
  templateUrl: './cats-display.component.html',
  styleUrls: ['./cats-display.component.scss'],
})
export class CatsDisplayComponent implements OnInit {
  constructor(public catsService: CatsService) {}

  cats: Cat[] | undefined;
  loading = true;

  async ngOnInit() {
    await this.catsService.syncLocalServerFavourites();
    this.showCats();
  }

  showCats() {
    this.catsService.getRandomCats().subscribe(cats => {
      this.cats = cats.cats;
      this.loading = false;
    });
  }
}
