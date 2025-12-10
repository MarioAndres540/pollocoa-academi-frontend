import { inject, Injectable } from '@angular/core';
import { AuthDto, RegistertDto } from '../models/auth.model';
import { environment } from '../../enviroment';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  http = inject(HttpClient)

  URI = environment.apiUrl + '/auth'

  login(body: AuthDto){
    return this.http.post(this.URI + '/login', body).pipe(
      map((resp: any) => {
        return resp
      }),
      catchError((error: any)=> {
        return error
      }) 
    )
  }

  crearProfesor(body: RegistertDto){
    return this.http.post(this.URI + '/register', body).pipe(
      map((resp: any) => {
        return resp
      }),
      catchError((error: any)=> {
        return error
      })
    )
  }
  
}
