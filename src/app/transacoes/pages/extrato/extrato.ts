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
  public pagina = signal<number>(1);
  public qtdPaginas = signal<number>(0);

  ngOnInit(): void {
    this.transacoesService.buscarTransacoesPorUsuario(this.contextoStore.getUsuario().id, this.pagina(), 10).subscribe(transacoes => {
      this.transacoes.set(transacoes.data);
      this.qtdPaginas.set(transacoes.pages);
    });
  }

  alterarPagina(novaPagina: number): void {
    this.pagina.set(novaPagina);
    this.ngOnInit();
  }
}
