import { Component, Input } from '@angular/core';
import { Cat, CatsService } from '../cats.service';
import { CatsDisplayComponent } from '../cats-display/cats-display.component';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.scss'],
})
export class CatItemComponent {
  constructor(
    public catsService: CatsService,
    public catDisplayComponent: CatsDisplayComponent,
  ) {}
  @Input() cat: Cat | undefined;

  addToFavourites(id: number) {
    console.log('adding');
    this.catsService.addToFavourites(id).subscribe(() => {
      const catIndex = this.catDisplayComponent.cats?.findIndex(
        cat => cat.id === id,
      );
      console.log('catIndex', catIndex);
      if (catIndex !== undefined) {
        this.catsService.getRandomCats().subscribe(newCats => {
          console.log('cat', newCats);
          this.catDisplayComponent.cats = newCats.cats;
          console.log(this.catDisplayComponent.cats);
        });
        // this.catsService.getRandomCat().subscribe((newCat) => {
        //   console.log('cat', newCat);
        //   this.catDisplayComponent.cats?.splice(catIndex, 1, newCat);
        //   console.log(this.catDisplayComponent.cats);
        // });
      }
    });
  }
}
