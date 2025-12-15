import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../enviroment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Estudiante {
  http = inject(HttpClient)
  URI = environment.apiUrl + '/students'

  obtenerEstudiantes() {
    // 👇 Esto es FUNDAMENTAL para que el navegador envíe la cookie 'token'
    return this.http.get(this.URI, { withCredentials: true }).pipe(
      map((resp: any) => {
        console.log('Lista estudiantes', resp);
        return resp
      }),
      catchError((error: any) => {
        return throwError(() => error)
      })
    )
  }

  createEstudiante(data: any) {}

  editarEstudiante(id: number, data: any) {}

  eliminarEstudiante(id: number) {}

  cambiarEstadoEstudiante(id: number, estado: string) {}
}
