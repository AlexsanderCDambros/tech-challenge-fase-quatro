import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing-module';
import { InicioComponent } from './page/inicio/inicio.component';
import { MatCardModule } from '@angular/material/card';
import { SaldoTotalComponent } from '../shared/components/saldo-total/saldo-total.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatCardModule,
    SaldoTotalComponent,
    MatButtonModule
  ]
})
export class InicioModule { }
