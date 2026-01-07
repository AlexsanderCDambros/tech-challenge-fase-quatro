import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';
import { loginGuard } from '../login/guards/login-guard';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
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
