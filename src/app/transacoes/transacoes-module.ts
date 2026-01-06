import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransacoesRoutingModule } from './transacoes-routing-module';
import { Extrato } from './pages/extrato/extrato';
import { TransacaoComponent } from '../shared/components/transacao/transacao';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    Extrato
  ],
  imports: [
    CommonModule,
    TransacoesRoutingModule,
    TransacaoComponent,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
  ]
})
export class TransacoesModule { }
