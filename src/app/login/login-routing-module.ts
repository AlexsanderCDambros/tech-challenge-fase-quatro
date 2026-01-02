import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './page/login/login';
import { Cadastrar } from './page/cadastrar/cadastrar';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autenticar',
    pathMatch: 'full'
  },
  {
    path: 'autenticar',
    component: Login
  },
  {
    path: 'cadastrar',
    component: Cadastrar
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
