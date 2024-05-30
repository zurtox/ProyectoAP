import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserToPost } from '../../../interfaces/userToPost.interface';
import { UserApiService } from '../../../services/user-api.service';
import { FormsModule } from '@angular/forms';
import { S3ApiService } from '../../../services/s3-api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent {
  filename: string = '';

  newUser: UserToPost = {
    email: '',
    password: '',
    firstName: '',
    firstLastName: '',
    secondLastName: '',
    secondName: '',
    personalId: '',
    birthDate: '',
    phone: '',
    photo: 0,
    username: '',
    nationality: 0,
    comunity: 0,
    gender: '',
    administrator: false,
  };

  emailInput: string = '';
  passwordInput: string = '';
  firstNameInput: string = '';
  secondNameInput: string = '';
  firstLastNameInput: string = '';
  secondLastNameInput: string = '';
  identificationInput: string = '';
  usernameInput: string = '';
  birthdayInput: string = '';
  nationalityInput: string = '';
  comunityInput: string = '';
  genderInput: string = '';
  phoneInput: string = '';

  constructor(private s3ApiService: S3ApiService  ,private userApi: UserApiService, private router: Router) {}

  uploadPhoto(event: any){
    const file = event.target.files[0]
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.s3ApiService.uploadFile(formData).subscribe(
        (res) => {
          this.updateImage(file.name).subscribe(() => {
            console.log(res)
            // this.uploadActivity();
          });
        }
      );
    }
  }

  updateImage(filename: string) {
    return this.s3ApiService.getFileByName(filename).pipe(
      map(res => {
        this.filename = res!.result;
        console.log(this.filename);
      })
    );
  }

  

  signUpAction() {

    
    this.newUser.email = this.emailInput;
    this.newUser.password = this.passwordInput;
    this.newUser.firstName = this.firstNameInput;
    this.newUser.secondName = this.secondNameInput;
    this.newUser.firstLastName = this.firstLastNameInput;
    this.newUser.secondLastName = this.secondLastNameInput;
    this.newUser.personalId = this.identificationInput;
    this.newUser.username = this.usernameInput;
    this.newUser.birthDate = this.birthdayInput;
    this.newUser.phone = this.phoneInput;
    this.newUser.photo = 1;
    this.newUser.nationality = 1;
    this.newUser.comunity = 1;
    this.newUser.gender = 'Hombre';
    this.newUser.administrator = false;

    this.userApi.signUp(this.newUser).subscribe((response: any) => {
      if (response.status == 200) {
        console.log('Usuario creado correctamente');
      } else {
        console.log('Error al crear usuario');
      }
    });
    
  }
}
