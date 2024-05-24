import { Component } from '@angular/core';
import { MovieBoxComponent } from '../../components/movie-box/movie-box.component';
import { DropdownMenuComponent } from '../../components/dropdown-menu/dropdown-menu.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    MovieBoxComponent,
    DropdownMenuComponent,
    SearchBoxComponent
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  iterator: any [] = Array(25).fill(0)
  categories: string [] = [
    "Comedy",
    "Action",
    "Horror",
    "Romance"
  ]
  options: string [] = [
    "Movie",
    "Serie",
    "Documentary"
  ]
}
