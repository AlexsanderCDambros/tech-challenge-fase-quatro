import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { loginGuard } from '../login/guards/login-guard';

const routes: Routes = [
  {
    path: '',
    component: ExtratoComponent,
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
