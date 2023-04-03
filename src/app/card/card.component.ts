import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() image: string | undefined;
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() buttonText: string | undefined;
  @Output() buttonClicked = new EventEmitter<boolean>();
}
