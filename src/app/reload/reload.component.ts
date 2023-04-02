import { Component } from '@angular/core';
import { CatsService } from '../cats.service';
import { CatsDisplayComponent } from '../cats-display/cats-display.component';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.scss'],
})
export class ReloadComponent {
  constructor(
    public catsService: CatsService,
    public catDisplayComponent: CatsDisplayComponent,
  ) {}

  showCats() {
    this.catDisplayComponent.showCats();
  }
}
