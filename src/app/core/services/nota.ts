import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../enviroment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Nota {
   http = inject(HttpClient)
  URI = environment.apiUrl + '/grades'

  obtenerNotas() {
    return this.http.get(this.URI, { withCredentials: true }).pipe(
      map((resp: any) => {
        console.log('Lista notas', resp);
        return resp
      }),
      catchError((error: any) => {
        return throwError(() => error)
      })
    )}
}
