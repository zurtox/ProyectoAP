import { Component } from '@angular/core';
import { ActorBoxComponent } from '../actor-box/actor-box.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { EpisodeBoxComponent } from '../episode-box/episode-box.component';

@Component({
  selector: 'app-selected-serie',
  standalone: true,
  imports: [ActorBoxComponent, NavbarComponent, EpisodeBoxComponent],
  templateUrl: './selected-serie.component.html',
  styleUrl: './selected-serie.component.css'
})
export class SelectedSerieComponent {
  episodeBox: EpisodeBoxComponent[]=[new EpisodeBoxComponent(), new EpisodeBoxComponent(), new EpisodeBoxComponent()]
  actorBox: ActorBoxComponent[]=[new ActorBoxComponent(), new ActorBoxComponent(), new ActorBoxComponent()]
  movieTitle: string = 'Openheimer';
  movieReleaseDate: string = '24 Febrero 2024';
  movieDuration: string = '2 horas 30 minutos';
  movieSynopsis: string = 'Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.';
}
