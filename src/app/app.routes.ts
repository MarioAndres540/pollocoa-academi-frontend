import { Routes } from '@angular/router';
import { ListaMateria } from './modules/materias/lista-materia/lista-materia';
import { FormMateria } from './modules/materias/form-materia/form-materia';
import { ListaNotas } from './modules/notas/lista-notas/lista-notas';
import { FormNotas } from './modules/notas/form-notas/form-notas';

export const routes: Routes = [
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'materias', component: ListaMateria},
{path: 'materias/new', component: FormMateria},
{path: 'materias/:id/edit', component: FormMateria},

{path: 'notas', component: ListaNotas},
{path: 'grades/new', component: FormNotas},
{path: 'grades/:id/edit', component: FormNotas},

{path: '**', redirectTo: '/login'},

];

