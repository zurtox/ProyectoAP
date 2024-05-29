import { Component } from '@angular/core';
import { TextInputComponent } from '../../../shared/components/text-input/text-input.component';
import { UserApiService } from '../../../services/user-api.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../../../interfaces/loginResponse.interface';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    TextInputComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  emailInput: string = ''
  passwordInput: string = ''
  loginResponse: LoginResponse | undefined

  constructor(private userApiService: UserApiService, private router: Router) {}

  checkLogin(){
    this.userApiService.login(this.emailInput, this.passwordInput).subscribe(
      response => {
        this.loginResponse = response!
        console.log(response)
        if(response!.data){
          if(this.loginResponse.data.administrator){
            this.router.navigate(['/admin-landing'])
          }else{
            this.router.navigate(['/landing'])
          }
        }
      }
    )
  }
}
