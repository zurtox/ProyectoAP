import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-episode-box',
  standalone: true,
  imports: [],
  templateUrl: './episode-box.component.html',
  styleUrl: './episode-box.component.css'
})
export class EpisodeBoxComponent {
  @Input()
  number: string = ""

  @Input()
  title: string = ""

  @Input()
  duration: string = ""
}
