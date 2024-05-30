import { Component } from '@angular/core';
import { UserApiService } from '../../../services/user-api.service';
import { UserResponse } from '../../../interfaces/userResponse.interface';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  constructor(private userApi: UserApiService) {}
  nationalityOptions: string[] = [
    "Costarricense",
    "Mexicano",
    "Colombiano",
    "Español",
    "Argentino"
  ];

  user!: UserResponse

  ngOnInit() {
    this.userApi.getUser().subscribe(
      user =>  {
        this.user = user!
      })
  }

  getNationality(){
    return this.nationalityOptions[this.user.data[0].nationality-1]
  }

  getAge(): number {
    const birthDate = new Date(this.user.data[0].birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Ajuste por mes y día de nacimiento
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
