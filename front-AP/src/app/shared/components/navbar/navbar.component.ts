import { Component } from '@angular/core';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'shared-navbar-user',
  standalone: true,
  imports: [DropdownMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  dropdownCategories: string [] = [
    "Profile",
    "History",
    "Favorites",
    "Cart",
    "Logout"
  ]
}
