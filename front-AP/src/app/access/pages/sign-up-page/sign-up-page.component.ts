import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserToPost } from '../../../interfaces/userToPost.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserApiService } from '../../../services/user-api.service';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {

  newUser!:UserToPost

  constructor (
    private fb: FormBuilder,
    private userApi: UserApiService,
    private router: Router
  ) {}

  signUpAction (event: Event) {

    event.preventDefault();
    console.log("SignUpAction");

    const target = event.target as HTMLFormElement;

    this.newUser.email = (target.querySelector('#email') as HTMLInputElement).value;
    this.newUser.password = (target.querySelector('#password') as HTMLInputElement).value;
    this.newUser.firstName = (target.querySelector('#firstname') as HTMLInputElement).value;
    this.newUser.firstLastName = (target.querySelector('#firstLastName') as HTMLInputElement).value;
    this.newUser.secondLastName = (target.querySelector('#secondLastName') as HTMLInputElement).value;
    this.newUser.secondName = (target.querySelector('#secondName') as HTMLInputElement).value;
    this.newUser.personalId = 123456789;
    this.newUser.birthDate = (target.querySelector('#birthDate') as HTMLInputElement).value;
    this.newUser.phone = 12345678;
    this.newUser.photo = 1;
    this.newUser.username = (target.querySelector('#username') as HTMLInputElement).value;
    this.newUser.nationality = 1;
    this.newUser.comunity = 1;
    this.newUser.gender = "Hombre";
    this.newUser.administrator = false;

    console.log(this.newUser);



    this.userApi.signUp(this.newUser).subscribe((response: any) => {
      if (response.status == 200) {
        console.log("Usuario creado correctamente");
      }else{
        console.log("Error al crear usuario");
      }


    });
  }

}
