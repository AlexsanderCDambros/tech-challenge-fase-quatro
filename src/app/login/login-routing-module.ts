import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './page/login/login';
import { Cadastrar } from './page/cadastrar/cadastrar';
import { loggedGuard } from './guards/logged-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autenticar',
    pathMatch: 'full'
  },
  {
    path: 'autenticar',
    component: Login,
    canActivate: [
      loggedGuard
    ]
  },
  {
    path: 'cadastrar',
    component: Cadastrar,
    canActivate: [
      loggedGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
