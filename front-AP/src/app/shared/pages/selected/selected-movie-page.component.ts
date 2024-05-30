import { CSP_NONCE, Component } from '@angular/core';
import { ActorBoxComponent } from '../../components/actor-box/actor-box.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContentAPIService } from '../../../services/content-api.service';
import { ActivatedRoute, RouterModule, convertToParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { S3ApiService } from '../../../services/s3-api.service';
import { map } from 'rxjs';
import { UserApiService } from '../../../services/user-api.service';

@Component({
  selector: 'app-selected-movie-page',
  standalone: true,
  imports: [NavbarComponent,
            ActorBoxComponent,
            RouterModule],
  templateUrl: './selected-movie-page.component.html',
  styleUrl: './selected-movie-page.component.css'
})
export class SelectedMoviePageComponent {

  // actorBox: ActorBoxComponent[]=[new ActorBoxComponent(), new ActorBoxComponent(), new ActorBoxComponent()]
  movieTitle: string = "";
  movieReleaseDate!: number;
  movieDuration: number = 0;
  movieSynopsis: string = '';
  actor: string [] = ["Director", "Nolan", "https://pics.filmaffinity.com/christopher_nolan-055100338198118-nm_large.jpg"]
  iterator: any [] = Array(8).fill(0)
  id: string = ""
  trailer: SafeResourceUrl | null = null;
  filename: string = ""
  starsCount: number[] = []
  isMovie: boolean = false

  constructor(private contentAPIService: ContentAPIService,
      private actualRoute: ActivatedRoute,
      private sanitizer: DomSanitizer,
      private s3ApiService: S3ApiService,
      private userApiService: UserApiService
  ) {}

  ngOnInit(){
    this.actualRoute.params.subscribe(
      params => {
        this.id = params["id"]
        this.getContentById(this.id)
        this.getContentStars(this.id)
        this.getIsMovie()
      }
    )
  }

  getIsMovie(){
    this.contentAPIService.isMovie(this.id).subscribe(
      (response) => {
        this.isMovie = response.flag
        if(this.isMovie){
          console.log(this.id)
          this.contentAPIService.getMovie(this.id).subscribe(
            (resMovie) => {
              this.movieDuration = resMovie.data[0].duration
            }
          )
        }
      }
    )
  }

  getContentStars(id: string){
    this.contentAPIService.getContentStars(id).subscribe(
      (response) => {
        if(response) {
          this.starsCount = Array(Math.round(response.data[0].rating)).fill(0)
        }
      }
    )
  }

  getContentById(contentId: string){
    this.contentAPIService.getContentById(this.id).subscribe(
      (response) => {
        if(response) {
          this.movieTitle = response.data[0].title
          this.movieReleaseDate = response.data[0].publishYear
          this.filename = response.data[0].photo
          this.movieSynopsis = response.data[0].synopsis
          const normalTrailer = response.data[0].trailer
          const trailerId = this.getTrailerId(normalTrailer)
          this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${trailerId}`)
          this.insertView(response.data[0].id.toString())
        }
      }
    )
  }

  insertView(contentId: string){
    this.contentAPIService.insertRecentlyViewed(contentId).subscribe(
      (response) => {
        console.log(response)
      }
    )
  }

  getTrailerId(url: string) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }


}

