import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './page/inicio/inicio';
import { loginGuard } from '../login/guards/login-guard-guard';

const routes: Routes = [
  {
    path: '',
    component: Inicio,
    canActivate: [
      loginGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
