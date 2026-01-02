import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Extrato } from './pages/extrato/extrato';
import { loginGuard } from '../login/guards/login-guard-guard';

const routes: Routes = [
  {
    path: '',
    component: Extrato,
    canActivate: [
      loginGuard
    ]
  }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransacoesRoutingModule { }
