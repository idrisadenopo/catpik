import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat, CatsService } from '../cats.service';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.scss'],
})
export class ReloadComponent {
  constructor(public catsService: CatsService) {}
  @Input() cats: Cat[] | undefined;
  @Output() catsUpdate = new EventEmitter<Cat[]>();
  @Output() loadingUpdate = new EventEmitter<boolean>();

  realoadCats() {
    this.loadingUpdate.emit(true);
    this.catsService.getRandomCats().subscribe(newCats => {
      this.catsUpdate.emit(newCats.cats);
      this.loadingUpdate.emit(false);
      window.scrollTo(0, 0);
    });
  }
}
