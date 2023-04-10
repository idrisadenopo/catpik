import { Component, OnInit } from '@angular/core';
import { Cat, CatsService } from '../cats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite-cats-display',
  templateUrl: './favourite-cats-display.component.html',
  styleUrls: ['./favourite-cats-display.component.scss'],
})
export class FavouriteCatsDisplayComponent implements OnInit {
  constructor(private catsService: CatsService, private router: Router) {}

  cats: Cat[] | undefined;
  loading = true;

  async ngOnInit() {
    await this.catsService.syncLocalServerFavourites();
    this.showFavouriteCats();
  }

  showFavouriteCats() {
    this.catsService.getFavourites().subscribe(cats => {
      this.cats = cats.cats;
      this.loading = false;
    });
  }

  navigateToHome() {
    this.router.navigateByUrl('/');
  }
}
