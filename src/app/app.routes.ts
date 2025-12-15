import { Routes } from '@angular/router';
import { ListaMateria } from './modules/materias/lista-materia/lista-materia';
import { FormMateria } from './modules/materias/form-materia/form-materia';
import { ListaNotas } from './modules/notas/lista-notas/lista-notas';
import { FormNotas } from './modules/notas/form-notas/form-notas';
import { Login } from './modules/auth/login/login';
import { Register } from './modules/auth/register/register';
import { Dashboard } from './modules/dashboard/dashboard';
import { ListaEstudiante } from './modules/estudiantes/lista-estudiante/lista-estudiante';
import { Inicio } from './modules/dashboard/inicio/inicio';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: Login },
  {path: 'register', component: Register},
  {path: 'dashboard', component: Dashboard, children: [ 
    { path: '', component: Inicio }, 
    { path: 'estudiantes', component: ListaEstudiante },
    { path: 'materias', component: ListaMateria },
    { path: 'notas', component: ListaNotas },
  ]},

  { path: 'materias/new', component: FormMateria },
  { path: 'materias/:id/edit', component: FormMateria },

  { path: 'notas/new', component: FormNotas },
  { path: 'notas/:id/edit', component: FormNotas },

  { path: '**', redirectTo: '/login' },
];