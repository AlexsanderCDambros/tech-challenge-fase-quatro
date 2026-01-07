import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { CadastrarComponent } from './page/cadastrar/cadastrar.component';
import { loggedGuard } from './guards/logged-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autenticar',
    pathMatch: 'full'
  },
  {
    path: 'autenticar',
    component: LoginComponent,
    canActivate: [
      loggedGuard
    ]
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent,
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
