import { Component } from '@angular/core';
import { ActorBoxComponent } from '../../components/actor-box/actor-box.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContentAPIService } from '../../../content-api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { S3ApiService } from '../../../s3-api.service';
import { map } from 'rxjs';

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
  movieTitle: string = "";
  movieReleaseDate!: number;
  movieDuration: string = '2 horas 30 minutos';
  movieSynopsis: string = '';
  actor: string [] = ["Director", "Nolan", "https://pics.filmaffinity.com/christopher_nolan-055100338198118-nm_large.jpg"]
  iterator: any [] = Array(8).fill(0)
  id: string = ""
  trailer: SafeResourceUrl | null = null;
  filename: string = ""

  constructor(private contentAPIService: ContentAPIService,
      private actualRoute: ActivatedRoute,
      private sanitizer: DomSanitizer,
      private s3ApiService: S3ApiService
  ) {}

  uploadPhoto(event: any){
    const file = event.target.files[0]
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.s3ApiService.uploadFile(formData).subscribe(
        (res) => {
          this.updateImage(file.name).subscribe(() => {
            console.log(res)
            // this.uploadActivity();
          });
        }
      );
    }
    // const formData = new FormData();
    // formData.append('file', event);
    // this.contentAPIService.uploadImage(formData).subscribe(
    //   res => {
    //     console.log(res)
    //   }
    // )
  }

  updateImage(filename: string) {
    return this.s3ApiService.getFileByName(filename).pipe(
      map(res => {
        this.filename = res!.result;
        console.log(this.filename);
      })
    );
  }

  ngOnInit(){
    this.actualRoute.params.subscribe(
      params => {
        this.id = params["id"]
        this.contentAPIService.getContentById(this.id).subscribe(
          (response) => {
            if(response) {
              this.movieTitle = response.data[0].title
              this.movieReleaseDate = response.data[0].publishYear
              // this.movieDuration = response.data[0].duration
              this.movieSynopsis = response.data[0].synopsis
              const normalTrailer = response.data[0].trailer
              const trailerId = this.getTrailerId(normalTrailer)
              this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${trailerId}`)
              console.log(this.trailer); // Comprobar la URL sanitizada
            }
          }
        )
      }
    )
  }

  getTrailerId(url: string) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }


}

