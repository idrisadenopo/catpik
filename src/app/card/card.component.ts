import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
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
export class CardComponent {
  @Input() image: string | undefined;
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() buttonText: string | undefined;
  @Output() buttonClicked = new EventEmitter<boolean>();
}
