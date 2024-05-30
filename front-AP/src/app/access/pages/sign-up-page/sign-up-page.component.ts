import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserToPost } from '../../../interfaces/userToPost.interface';
import { UserApiService } from '../../../services/user-api.service';
import { ContentAPIService } from '../../../services/content-api.service';
import { FormsModule } from '@angular/forms';
import { S3ApiService } from '../../../services/s3-api.service';
import { map } from 'rxjs';
import { DropdownMenuComponent } from '../../../shared/components/dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [FormsModule, DropdownMenuComponent],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent {
  filename: string = ''
  genderOptions: string[] = [];
  communityOptions: string[] = [];
  nationalityOptions: string[] = [
    "Costarricense",
    "Mexicano",
    "Estadounidense",
    "Canadiense",
    "Español"
  ];

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
    photo: '',
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
  nationalityInput: number = 0;
  comunityInput: number = 0;
  genderInput: number = 0;
  phoneInput: string = '';

  constructor(private s3ApiService: S3ApiService,
    private contentAPIService: ContentAPIService,
    private userApi: UserApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getGenders();
    this.getCommunities();
  }

  getCommunities() {
    this.contentAPIService.getCommunities().subscribe(
      (response) => {
        if (response) {
          for (let i = 0; i < response.data.length; i++) {
            this.communityOptions.push(response.data[i].name);
          }
        }
      }
    )
  }

  getGenders() {
    this.contentAPIService.getGenders().subscribe(
      (response) => {
        if (response) {
          for (let i = 0; i < response.data.length; i++) {
            this.genderOptions.push(response.data[i].value);
          }
        }
      }
    )
  }

  uploadPhoto(event: any) {
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
    this.newUser.photo = this.filename;
    this.newUser.nationality = this.nationalityInput+1;
    this.newUser.comunity = 1;
    this.newUser.administrator = false;
    this.newUser.gender = this.getGendersByIndex(this.genderInput)

    this.userApi.signUp(this.newUser).subscribe((response: any) => {
      console.log(response);
      if (response.status == 200) {
        console.log('Usuario creado correctamente');
      } else {
        console.log('Error al crear usuario');
      }
    });
  }

  getGendersByIndex(index: number) {
    if (index == 0) {
      return "Hombre"
    } else if (index == 1) {
      return "Mujer"
    } else if (index == 2) {
      return "Prefiero no decirlo"
    } else {
      return "Otro"
    }
  }
}
