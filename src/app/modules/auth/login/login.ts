import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../../core/services/auth';
import { AuthDto } from '../../../core/models/auth.model';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

   private authService = inject(Auth)

   async login(body: AuthDto){

    const resp =  await this.authService.login(body)

    
   }

}
