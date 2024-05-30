import { Component } from '@angular/core';
import { MovieBoxComponent } from '../../components/movie-box/movie-box.component';
import { DropdownMenuComponent } from '../../components/dropdown-menu/dropdown-menu.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { ContentAPIService } from '../../../services/content-api.service';
import { CategoryResponse } from '../../../interfaces/categoryResponse.interface';
import { Content, ContentResponse } from '../../../interfaces/contentResponse.interface';
import { Router, RouterModule } from '@angular/router';
import { UserApiService } from '../../../services/user-api.service';
import { User } from '../../../interfaces/userResponse.interface';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    MovieBoxComponent,
    DropdownMenuComponent,
    SearchBoxComponent,
    RouterModule
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  iterator: any [] = Array(25).fill(0)
  categoryNames: string [] = []
  options: string [] = [
    "Movie",
    "Serie",
    "Documentary"
  ]
  name: string = "Avengers"
  description: string = "2012"
  image: string = "https://i.ebayimg.com/images/g/YBwAAOSw9BRjQZyi/s-l1600.jpg"
  categoryResponse!: CategoryResponse;
  contentResponse!: ContentResponse;
  actualUser!: User;

  constructor(private contentAPIService: ContentAPIService,
    private router: Router,
    private userService: UserApiService
  ) {}

  ngOnInit() {
    this.contentAPIService.getAllCategories().subscribe(
      (response) => {
        if(response) {
          this.categoryResponse = response
          this.categoryNames = this.categoryResponse.data.map(category => category.name)
          this.getUser()
        }
      }
    )
  }

  getUser(){
    this.userService.getUser().subscribe(
      user => {
        this.actualUser = user!.data[0]
        this.getAllContent()
      }
    )
  }

  getAllContent(){
    this.contentAPIService.getAllContent().subscribe(
      (response) => {
        if(response) {
          this.contentResponse = response
        }
      }
    )
  }

  changeCategory(index: number){
    const categoryId = index+2
    this.contentAPIService.getContentByCategory(categoryId.toString()).subscribe(
      (response) => {
        if(response) {
          this.contentResponse = response
        }
      }
    )
  }

  changeContent(index: number){
    if(index == 0){
      this.contentAPIService.getAllMovies().subscribe(
        (response) => {
          if(response) {
            this.contentResponse = response
          }
        }
      )
    }else if(index == 1){
      this.contentAPIService.getAllSeries().subscribe(
        (response) => {
          if(response) {
            this.contentResponse = response
          }
        }
      )
    }else{
      this.contentAPIService.getAllDocumentaries().subscribe(
        (response) => {
          if(response) {
            this.contentResponse = response
          }
        }
      )
    }
  }

}
