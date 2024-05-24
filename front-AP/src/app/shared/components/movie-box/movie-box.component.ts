import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-movie-box',
  standalone: true,
  imports: [],
  templateUrl: './movie-box.component.html',
  styleUrl: './movie-box.component.css'
})
export class MovieBoxComponent {
  @Input()
  favorite: boolean = false;

  @Input()
  remove: boolean = false;

  @Input()
  buy: boolean = false;
}
