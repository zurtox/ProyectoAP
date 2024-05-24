import { Component } from '@angular/core';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { ContentCardComponent } from '../../../shared/components/content-card/content-card.component';
import { DropdownMenuComponent } from '../../../shared/components/dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [
    BadgeComponent,
    ContentCardComponent,
    DropdownMenuComponent
  ],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
  movie: string[] = [
    "https://i.ebayimg.com/images/g/9HcAAOSwuiVgpIKd/s-l1600.webp",
    "Mugen Train",
    "Movie"
  ]
  categories: string [] = ["Animation", "Action"]
  iterator: any [] = Array(20).fill(0)

  dropdownCategories: string [] = [
    "12 months",
    "6 months",
    "3 months",
  ]
}
