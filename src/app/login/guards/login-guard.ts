import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ContextoStore } from '../../shared/stores/contexto-store';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const contextoStore = inject(ContextoStore);

  const token = sessionStorage.getItem('token');
  const usuario = contextoStore.getUsuario();

  if (token) {
    if (!usuario.id){
      contextoStore.efetuarLogin(JSON.parse(atob(token)));
    }
    return true;
  }

  // redireciona para a rota de login quando não houver token
  return router.createUrlTree(['/login']);
};
