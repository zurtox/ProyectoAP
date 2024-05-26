import { Component } from '@angular/core';
import { MovieBoxComponent } from '../../components/movie-box/movie-box.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MovieBoxComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  iterator: any [] = Array(25).fill(0)
  name: string = "Avengers"
  description: string = "2012"
  image: string = "https://i.ebayimg.com/images/g/YBwAAOSw9BRjQZyi/s-l1600.jpg"
}
