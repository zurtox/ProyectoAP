import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'shared-content-card',
  standalone: true,
  imports: [
    BadgeComponent
  ],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent {
  @Input()
  image: string = ""

  @Input()
  name: string = ""

  @Input()
  type: string = ""

  @Input()
  categories: string [] = []

  @Input()
  favorite: boolean = false;

  @Input()
  remove: boolean = false;

  @Input()
  buy: boolean = false;
  // https://i.ebayimg.com/images/g/9HcAAOSwuiVgpIKd/s-l1600.webp
}
