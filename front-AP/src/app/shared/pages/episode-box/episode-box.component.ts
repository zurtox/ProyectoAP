import { Component } from '@angular/core';

@Component({
  selector: 'episode-box',
  standalone: true,
  imports: [],
  templateUrl: './episode-box.component.html',
  styleUrl: './episode-box.component.css'
})
export class EpisodeBoxComponent {
  episodeNumber: number = 1;
  episodeTitle: string = 'Episode One';
  episodeDuration: string = '1 hour 30 minutes';
}
