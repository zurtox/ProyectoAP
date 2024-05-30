import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { UserApiService } from '../../../services/user-api.service';
import { Content } from '../../../interfaces/contentResponse.interface';
import { ContentAPIService } from '../../../services/content-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-content-card',
  standalone: true,
  imports: [
    BadgeComponent
  ],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent {

  constructor(private userApiService: UserApiService,
    private contentApiService: ContentAPIService,
    private router: Router){}

  @Input()
  content!: Content

  @Input()
  favorite: boolean = false;

  @Input()
  remove: boolean = false;

  @Input()
  buy: boolean = false;

  @Input()
  detail: string = ""

  categoryName: string = ""


  @Output()
  isChanged = new EventEmitter<boolean>();

  addFavorite(){
    this.userApiService.addFavorite(this.content.id.toString()).subscribe()
    this.isChanged.emit(true)
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
    console.log("deleting content: " + this.content.id)
  }

  ngOnInit(){
    this.contentApiService.getCategoryById(this.content.category.toString()).subscribe(
      res => {
        this.categoryName = res!.data[0].name
      }
    )
  }

  viewContent(){
    this.router.navigate(['/selected-movie', this.content.id])
}

}
