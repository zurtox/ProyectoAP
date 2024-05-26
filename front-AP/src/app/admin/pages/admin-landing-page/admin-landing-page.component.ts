import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { DropdownMenuComponent } from '../../../shared/components/dropdown-menu/dropdown-menu.component';
import { MovieBoxComponent } from '../../../shared/components/movie-box/movie-box.component';

@Component({
  selector: 'app-admin-landing-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    DropdownMenuComponent,
    MovieBoxComponent
  ],
  templateUrl: './admin-landing-page.component.html',
  styleUrl: './admin-landing-page.component.css'
})
export class AdminLandingPageComponent {
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
  name: string = "Avengers"
  description: string = "2012"
  image: string = "https://i.ebayimg.com/images/g/YBwAAOSw9BRjQZyi/s-l1600.jpg"
}
