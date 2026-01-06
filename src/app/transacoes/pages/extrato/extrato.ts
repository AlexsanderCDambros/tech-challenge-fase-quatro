import { Component, inject, OnInit, signal } from '@angular/core';
import { TransacoesService } from '../../../shared/services/transacoes.service';
import { ContextoStore } from '../../../shared/stores/contexto-store';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.html',
  styleUrl: './extrato.scss',
  standalone: false
})
export class Extrato implements OnInit {

  private transacoesService = inject(TransacoesService);
  private contextoStore = inject(ContextoStore);

  public transacoes = signal<Transacao[]>([]);

  ngOnInit(): void {
    this.transacoesService.buscarTransacoesPorUsuario(this.contextoStore.getUsuario().id).subscribe(transacoes => {
      this.transacoes.set(transacoes);
    });
  }
}
