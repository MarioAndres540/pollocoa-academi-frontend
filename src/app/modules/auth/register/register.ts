import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../core/services/auth';
import { RegistertDto } from '../../../core/models/auth.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
  private authService = inject(Auth);
  private router = inject(Router);

  formRegister = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  async onSubmitRegister() {
    if (this.formRegister.invalid) return;

    const { password, confirmPassword } = this.formRegister.value;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const body: RegistertDto = {
      nombre: this.formRegister.value.nombre!,
      email: this.formRegister.value.email!,
      password: this.formRegister.value.password!,
    };

    this.authService.crearProfesor(body).subscribe({
      next: (resp: any) => {
        if (resp.success) {
          alert('Cuenta creada exitosamente');
          this.router.navigate(['/login']);
        } else {
          alert('Error al crear cuenta: ' + resp.message);
        }
      },
      error: (err) => {
        console.error('Error en registro:', err);
        alert('Error inesperado al registrar');
      },
    });
  }

  iniciarSesion() {
    this.router.navigate(['/login']);
  }
}