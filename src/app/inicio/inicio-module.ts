import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing-module';
import { Inicio } from './page/inicio/inicio';
import { MatCardModule } from '@angular/material/card';
import { SaldoTotal } from '../shared/components/saldo-total/saldo-total';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    Inicio
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatCardModule,
    SaldoTotal,
    MatButtonModule
  ]
})
export class InicioModule { }
