import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = sessionStorage.getItem('token');

  if (!token) {
    return true;
  }

  // redireciona para a rota de inicio quando houver token
  return router.createUrlTree(['/inicio']);
};
