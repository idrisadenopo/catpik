import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat, CatsService } from '../cats.service';
import { ToastrService } from 'ngx-toastr';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(400, style({ opacity: 1 })),
      ]),
      transition(':leave', [animate(400, style({ opacity: 0 }))]),
    ]),
  ],
})
export class CatItemComponent {
  constructor(public catsService: CatsService, private toastr: ToastrService) {}
  @Input() cat: Cat | undefined;
  @Input() cats: Cat[] | undefined;
  @Input() priority = true;
  @Output() catsUpdate = new EventEmitter<Cat[]>();
  imageHasLoaded = false;

  addToFavourites(id: number) {
    this.catsService.addToFavourites(id).subscribe(
      () => {
        this.catsService.addToLocalFavourites(id);
        const catIndex = this.cats?.findIndex(cat => cat.id === id);
        if (catIndex !== undefined) {
          this.catsService.getRandomCats().subscribe(newCats => {
            this.catsUpdate.emit(newCats.cats);
            window.scrollTo(0, 0);
          });
        }
      },
      (error: Error) => {
        if (error.message === 'tried faving cat') {
          this.toastr.error(
            "Once you pik a cat, it can't be unpikked",
            'Cats are for life',
          );
        }
      },
    );
  }

  getHeartColor(id: number) {
    return this.catsService.isInLocalFavourites(id)
      ? 'fill-catpik-tertiary stroke-catpik-tertiary'
      : 'fill-none stroke-catpik-tertiary';
  }
}
