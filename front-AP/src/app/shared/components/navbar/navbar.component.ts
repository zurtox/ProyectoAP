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
  dropdownCategoriesAdmin: string[][] = [
    ["Search", "/search"],
    ["Persons", "/actors"],
    ["Statistics", "/statistics"],
    ["Logout", ""]
  ]
  userPhoto: string = '/assets/holderUser.jpg';
  isAdmin: boolean = false

  constructor(private userApi: UserApiService, private router: Router) { }

  ngOnInit() {
    this.loadUserData();
    // this.userApi.getUser().subscribe(user => {
    //   this.userPhoto = user?.data[0].photo || '';
    //   this.isAdmin = user!.data[0].administrator;
    // });
  }

  loadUserData() {
    if (!['/', '/register'].includes(this.router.url)) {
      this.userApi.getUser().subscribe(user => {
        this.userPhoto = user?.data[0].photo
        this.isAdmin = user!.data[0].administrator;
      });
    }
  }
}
// /assets/images/profileHolder.png
