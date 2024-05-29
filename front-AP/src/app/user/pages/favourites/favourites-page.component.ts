import { Component } from '@angular/core';
import { ContentCardComponent } from '../../../shared/components/content-card/content-card.component';
import { UserApiService } from '../../../services/user-api.service';
import { Content } from '../../../interfaces/contentResponse.interface';
import { ContentAPIService } from '../../../services/content-api.service';
import { FavoriteResponse } from '../../../interfaces/favoriteResponse.interface';

@Component({
  selector: 'app-favourites-page',
  standalone: true,
  imports: [
    ContentCardComponent
  ],
  templateUrl: './favourites-page.component.html',
  styleUrl: './favourites-page.component.css'
})
export class FavouritesPageComponent {

  favoriteResponse!: FavoriteResponse
  contentCategoryName: string[] = []
  favoriteContents: Content[] = []

  constructor(private userApiService: UserApiService,
      private contentApiService: ContentAPIService
  ){}

  ngOnInit(){
    this.userApiService.getAllFavorites().subscribe(
      res => {
        this.favoriteResponse = res!
        this.favoriteResponse.data.forEach(
          favorite => {
            this.contentApiService.getContentById(favorite.content.toString()).subscribe(
              contentRes => {
                this.favoriteContents.push(contentRes!.data[0])
                contentRes!.data.forEach(
                  content => {
                    this.contentApiService.getCategoryById(content.category.toString()).subscribe(
                      res => {
                        this.contentCategoryName.push(res!.data[0].name)
                      }
                    )
                  }
                )
              }
            )
          }
        )
      }
    )
  }

  refresh(){

  }
}
