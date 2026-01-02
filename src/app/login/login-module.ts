import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing-module';
import { Login } from './page/login/login';
import { Cadastrar } from './page/cadastrar/cadastrar';


@NgModule({
  declarations: [
    Login,
    Cadastrar
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
