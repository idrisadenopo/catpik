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

  realoadCats() {
    this.catsService.getRandomCats().subscribe(newCats => {
      console.log('cat', newCats);
      this.catsUpdate.emit(newCats.cats);
      console.log(this.cats);
    });
  }
}
