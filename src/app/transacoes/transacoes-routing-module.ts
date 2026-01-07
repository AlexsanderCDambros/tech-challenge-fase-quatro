import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { loginGuard } from '../login/guards/login-guard';
import { EditarCriarTransacaoComponent } from './pages/editar-criar-transacao.component/editar-criar-transacao.component';

const routes: Routes = [
  {
    path: '',
    component: ExtratoComponent,
    canActivate: [
      loginGuard
    ]
  },
  {
    path: 'transacao',
    component: EditarCriarTransacaoComponent,
    canActivate: [
      loginGuard
    ]
  },
  {
    path: 'transacao/:id',
    component: EditarCriarTransacaoComponent,
    canActivate: [
      loginGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransacoesRoutingModule { }
