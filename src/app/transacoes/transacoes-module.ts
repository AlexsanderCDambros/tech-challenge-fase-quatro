import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransacoesRoutingModule } from './transacoes-routing-module';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { TransacaoComponent } from '../shared/components/transacao/transacao.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ExtratoComponent
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
