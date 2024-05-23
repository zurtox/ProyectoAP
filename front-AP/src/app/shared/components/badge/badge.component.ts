import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {
  @Input()
  text: string = ""
}
