import { Routes } from '@angular/router';
import { loginGuard } from './login/guards/login-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio-module').then(m => m.InicioModule),
    canActivate: [
      loginGuard
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login-module').then(m => m.LoginModule)
  },
  {
    path: 'transacoes',
    loadChildren: () => import('./transacoes/transacoes-module').then(m => m.TransacoesModule),
    canActivate: [
      loginGuard
    ]
  },
  {
    path: '**',
    redirectTo: '/inicio'
  }
];
