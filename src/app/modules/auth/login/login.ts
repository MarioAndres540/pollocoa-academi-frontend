import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider'
import { Auth } from '../../../core/services/auth';
import { AuthDto } from '../../../core/models/auth.model';
import { MatCardModule } from '@angular/material/card';
import { FormGroup,FormsModule, FormControl, Validators } from '@angular/forms';
import { minLengthPassword } from '../constants/auth.const';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

   private authService = inject(Auth)
   private router = inject(Router)

   minLengthPassword = signal<number>(minLengthPassword);

    formLogin = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.minLength(3), Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(this.minLengthPassword())])
    })

 async onSubmitLogin() {
    if (this.formLogin.valid) {
      const body: AuthDto = this.formLogin.value as AuthDto;

      this.authService.login(body).subscribe({
        next: (resp: any) => {
          if (resp.success) {
            // Guardar en sessionStorage
            sessionStorage.setItem('token', resp.data.token);
            sessionStorage.setItem('user', JSON.stringify(resp.data.user));

            console.log('Login exitoso:', resp);

            // Redirigir al dashboard
            this.router.navigate(['/dashboard']);
          }
        },
        error: (err) => {
          console.error('Error en login:', err);
        },
      });
    }
  }


  async registrarse(){
     this.router.navigate(['/register']);
  }
   

}
