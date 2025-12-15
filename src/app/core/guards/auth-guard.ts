import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
   const http = inject(HttpClient);
  const router = inject(Router);

  return http.get('http://localhost:3000/auth/check', { withCredentials: true }).pipe(
    map((resp: any) => {
      if (resp?.valid) {
        return true;
      } else {
        return router.parseUrl('/login');
      }
    }),
    catchError(() => of(router.parseUrl('/login')))
  );

};
