import {
  AfterViewChecked,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Cat } from '../cats.service';

@Component({
  selector: 'app-cat-image',
  templateUrl: './cat-image.component.html',
  styleUrls: ['./cat-image.component.scss'],
})
export class CatImageComponent implements AfterViewChecked {
  @Input() cat: Cat | undefined;
  @Output() finishedLoading = new EventEmitter<boolean>();

  ngAfterViewChecked() {
    this.finishedLoading.emit(true);
  }
}
