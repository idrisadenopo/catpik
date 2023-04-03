import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat, CatsService } from '../cats.service';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.scss'],
})
export class CatItemComponent {
  constructor(public catsService: CatsService) {}
  @Input() cat: Cat | undefined;
  @Input() cats: Cat[] | undefined;
  @Output() catsUpdate = new EventEmitter<Cat[]>();

  // TODO: use pipe()
  addToFavourites(id: number) {
    console.log('adding');
    this.catsService.addToFavourites(id).subscribe(() => {
      this.catsService.addToLocalFavourites(id);
      const catIndex = this.cats?.findIndex(cat => cat.id === id);
      console.log('catIndex', catIndex);
      if (catIndex !== undefined) {
        this.catsService.getRandomCats().subscribe(newCats => {
          console.log('cat', newCats);
          this.catsUpdate.emit(newCats.cats);
          console.log(this.cats);
        });
        // this.catsService.getRandomCat().subscribe((newCat) => {
        //   console.log('cat', newCat);
        //   this.catDisplayComponent.cats?.splice(catIndex, 1, newCat);
        //   console.log(this.catDisplayComponent.cats);
        // });
      }
    });
  }

  getHeartColor(id: number) {
    return this.catsService.isInLocalFavourites(id)
      ? 'fill-red-400 stroke-red-400'
      : '';
  }
}
