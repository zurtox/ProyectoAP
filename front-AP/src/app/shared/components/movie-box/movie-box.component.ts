import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from '../../../interfaces/contentResponse.interface';
import { UserApiService } from '../../../services/user-api.service';
import { Router } from '@angular/router';
import { ContentAPIService } from '../../../services/content-api.service';

@Component({
  selector: 'shared-movie-box',
  standalone: true,
  imports: [],
  templateUrl: './movie-box.component.html',
  styleUrl: './movie-box.component.css'
})
export class MovieBoxComponent {

  constructor(private userApiService: UserApiService,
    private router: Router,
    private contentApi: ContentAPIService
  ){}

  @Input()
  favorite: boolean = false;

  @Input()
  remove: boolean = false;

  @Input()
  buy: boolean = false;

  @Input()
  content!: Content

  @Input()
  description: string = ""

  @Input()
  image: string = ""

  @Output()
  isChanged = new EventEmitter<boolean>();

  isStateChange(){
    this.isChanged.emit(true)
  }


  addFavorite(){
    this.userApiService.addFavorite(this.content.id.toString()).subscribe()
    console.log("adding to favorites: " + this.content.id)
  }

  addCart(){
    this.userApiService.addToCart(this.content.id.toString()).subscribe(
      res => {
        console.log(res)
      }
    )
    console.log("adding to cart: " + this.content.id)
  }

  deleteContent(){
    this.contentApi.deleteContent(this.content.id.toString()).subscribe(
      res => {
        console.log(res)
        console.log("deleting content: " + this.content.id)
      }
    )
  }

  viewContent(){
      this.router.navigate(['/selected-movie', this.content.id])
  }


}
