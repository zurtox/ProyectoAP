import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { DropdownMenuComponent } from '../../../shared/components/dropdown-menu/dropdown-menu.component';
import { MovieBoxComponent } from '../../../shared/components/movie-box/movie-box.component';

@Component({
  selector: 'app-actors-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    DropdownMenuComponent,
    MovieBoxComponent
  ],
  templateUrl: './actors-page.component.html',
  styleUrl: './actors-page.component.css'
})
export class ActorsPageComponent {
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
  name: string = "Robert Downey Jr"
  description: string = "Actor"
  image: string = "https://st1.uvnimg.com/be/87/b2cac6554e4590e8cd6dfecfaada/e0a86d053be945879a61d9e0abf09c08"
}
