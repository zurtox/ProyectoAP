import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActorBoxComponent } from '../actor-box/actor-box.component';

@Component({
  selector: 'app-selected-movie-page',
  standalone: true,
  imports: [NavbarComponent,
            ActorBoxComponent
  ],
  templateUrl: './selected-movie-page.component.html',
  styleUrl: './selected-movie-page.component.css'
})
export class SelectedMoviePageComponent {
  actorBox: ActorBoxComponent[]=[new ActorBoxComponent(), new ActorBoxComponent(), new ActorBoxComponent()]
  movieTitle: string = 'Openheimer';
  movieReleaseDate: string = '24 Febrero 2024';
  movieDuration: string = '2 horas 30 minutos';
  movieSynopsis: string = 'Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.';
}
