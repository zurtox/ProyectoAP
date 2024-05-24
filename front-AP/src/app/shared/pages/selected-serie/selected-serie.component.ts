import { Component } from '@angular/core';
import { ActorBoxComponent } from '../../components/actor-box/actor-box.component';
import { EpisodeBoxComponent } from '../../components/episode-box/episode-box.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DropdownMenuComponent } from '../../components/dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-selected-serie',
  standalone: true,
  imports: [ActorBoxComponent, NavbarComponent, EpisodeBoxComponent, DropdownMenuComponent],
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
  episodes: string [] = ['Episode One', '1 hour 30 minutes', '1']
  actor: string [] = ["Director", "Nolan", "https://pics.filmaffinity.com/christopher_nolan-055100338198118-nm_large.jpg"]
  dropdownCategories: string [] = [
    "Season 1",
    "Season 2",
    "Season 3",
  ]
}
