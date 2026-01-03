import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ContextoStore } from '../../shared/stores/contexto-store';
import { lastValueFrom } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const contextoStore = inject(ContextoStore);

  const token = sessionStorage.getItem('token');
  const usuario = contextoStore.getUsuario();

  if (!usuario.id){
    contextoStore.efetuarLogout();
  }

  if (token) {
    return true;
  }

  // redireciona para a rota de login quando não houver token
  return router.createUrlTree(['/login']);
};
