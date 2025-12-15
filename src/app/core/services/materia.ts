import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../enviroment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Materia {
   http = inject(HttpClient)
  URI = environment.apiUrl + '/subjects'

  obetenerMaterias() {
    return this.http.get(this.URI, { withCredentials: true }).pipe(
      map((resp: any) => {
        console.log('Lista materias', resp);
        return resp
      }),
      catchError((error: any) => {
        return throwError(() => error)
      })
    )
  }

  crearMateria(data: any) {}

  editarMateria(id: number, data: any) {}
  
  eliminarMateria(id: number) {}

  cambiarEstadoMateria(id: number, estado: string) {}
}
