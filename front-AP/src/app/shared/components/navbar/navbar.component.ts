import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { DropdownNavbarComponent } from '../dropdown-navbar/dropdown-navbar.component';
import { UserApiService } from '../../../services/user-api.service';

@Component({
  selector: 'shared-navbar-user',
  standalone: true,
  imports: [
    DropdownNavbarComponent,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  dropdownCategories: string[][] = [
    ["Search", "/search"],
    ["Profile", "/profile"],
    ["History", "/history"],
    ["Favorites", "/favorites"],
    ["Cart", "/cart"],
    ["Logout", ""]
  ]
  userPhoto: string = '';

  constructor(private userApi: UserApiService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!['/', '/register'].includes(event.urlAfterRedirects)) {
          this.userApi.getUser().subscribe(user => {
            this.userPhoto = user?.data[0].photo || '';
          })
        }
      }
    });
  }
}
