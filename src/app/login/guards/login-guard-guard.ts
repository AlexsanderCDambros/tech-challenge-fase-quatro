import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const token = sessionStorage.getItem('token');

    if (token) {
        return true;
    }

    // redireciona para a rota de login quando não houver token
    return router.createUrlTree(['/login']);
};
