import { Routes } from '@angular/router';
import { ListaMateria } from './modules/materias/lista-materia/lista-materia';
import { FormMateria } from './modules/materias/form-materia/form-materia';
import { ListaNotas } from './modules/notas/lista-notas/lista-notas';
import { FormNotas } from './modules/notas/form-notas/form-notas';
import { Login } from './modules/auth/login/login';
import { Register } from './modules/auth/register/register';
import { Dashboard } from './modules/dashboard/dashboard';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: Login },
  {path: 'register', component: Register},
  {path: 'dashboard', component: Dashboard},

  { path: 'materias', component: ListaMateria },
  { path: 'materias/new', component: FormMateria },
  { path: 'materias/:id/edit', component: FormMateria },

  { path: 'notas', component: ListaNotas },
  { path: 'notas/new', component: FormNotas },
  { path: 'notas/:id/edit', component: FormNotas },



  { path: '**', redirectTo: '/login' },
];