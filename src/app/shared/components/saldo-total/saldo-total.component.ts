import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TransacoesService } from '../../services/transacoes.service';
import { ContextoStore } from '../../stores/contexto-store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-saldo-total',
  imports: [
    MatCardModule,
    CurrencyPipe
  ],
  templateUrl: './saldo-total.component.html',
  styleUrl: './saldo-total.component.scss',
  standalone: true,
})
export class SaldoTotalComponent {

  private transacoesService = inject(TransacoesService);
  private contextoStore = inject(ContextoStore);

  public saldoTotal = signal(0);

  ngOnInit() {
    this.transacoesService.buscarSaldoTotalPorUsuario(this.contextoStore.getUsuario().id).subscribe(saldo => {
      this.saldoTotal.set(saldo);
    });
  }
}
