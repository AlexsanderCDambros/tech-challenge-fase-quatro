import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransacoesRoutingModule } from './transacoes-routing-module';
import { Extrato } from './pages/extrato/extrato';


@NgModule({
  declarations: [
    Extrato
  ],
  imports: [
    CommonModule,
    TransacoesRoutingModule
  ]
})
export class TransacoesModule { }
