import { Component } from '@angular/core';
import { ContentCardComponent } from '../../../shared/components/content-card/content-card.component';

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
  movie: string[] = [
    "https://i.ebayimg.com/images/g/9HcAAOSwuiVgpIKd/s-l1600.webp",
    "Mugen Train",
    "Movie"
  ]
  categories: string [] = ["Animation", "Action"]
  iterator: any [] = Array(20).fill(0)
}
