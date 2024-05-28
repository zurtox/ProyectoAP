import { Component } from '@angular/core';
import { ActorBoxComponent } from '../../components/actor-box/actor-box.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-selected-movie-page',
  standalone: true,
  imports: [NavbarComponent,
            ActorBoxComponent],
  templateUrl: './selected-movie-page.component.html',
  styleUrl: './selected-movie-page.component.css'
})
export class SelectedMoviePageComponent {
  actorBox: ActorBoxComponent[]=[new ActorBoxComponent(), new ActorBoxComponent(), new ActorBoxComponent()]
  movieTitle: string = 'Openheimer';
  movieReleaseDate: string = '24 Febrero 2024';
  movieDuration: string = '2 horas 30 minutos';
  movieSynopsis: string = 'Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio. Lorem ipsum dolor sit amet consectetur. Sed consequat ornare varius mauris facilisi aliquam a vel arcu. Rutrum vestibulum venenatis viverra proin at massa odio.';
  actor: string [] = ["Director", "Nolan", "https://pics.filmaffinity.com/christopher_nolan-055100338198118-nm_large.jpg"]
  iterator: any [] = Array(8).fill(0)

  netflix: string = "assets/platforms/netflix.png";
  primevideo: string = "assets/platforms/primevideo.png";
  max: string = "assets/platforms/max.jpg";
  disney: string = "assets/platforms/disney.jpg";
  starplus: string = "assets/platforms/starplus.png";


}

