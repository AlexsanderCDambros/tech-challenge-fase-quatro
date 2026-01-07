import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { ITransacao } from '../interfaces/transacao';

@Injectable({
  providedIn: 'root',
})
export class TransacoesService {
  constructor(
    private http: HttpClient
  ) {}

  buscarTransacoesPorUsuario(idUsuario: string, pagina?: number, porPagina?: number): Observable<{data: ITransacao[], pages:number, items: number}> {
    let url = `${environment.apiUrl}/transacoes?userId=${idUsuario}&_sort=-data`;
    if (pagina !== undefined && porPagina !== undefined) {
      url += `&_page=${pagina}&_per_page=${porPagina}`;
    }
    return this.http.get<{data: ITransacao[], pages :number, items: number}>(url);
  }

  buscarSaldoTotalPorUsuario(idUsuario: string): Observable<number> {
    return this.http.get<ITransacao[]>(`${environment.apiUrl}/transacoes?userId=${idUsuario}`)
      .pipe(
        map(transacoes => transacoes.reduce((total, t) =>
          total + (t.tipo === 'Receita' ? t.valor : (t.tipo === 'Despesa' ? -t.valor : 0))
        , 0))
      );
  }

  buscarTransacaoPorId(id: string): Observable<ITransacao> {
    return this.http.get<ITransacao>(`${environment.apiUrl}/transacoes/${id}`);
  }

  criarTransacao(transacao: ITransacao): Observable<ITransacao> {
    return this.http.post<ITransacao>(`${environment.apiUrl}/transacoes`, transacao);
  }

  editarTransacao(id: string, transacao: Partial<ITransacao>): Observable<ITransacao> {
    return this.http.patch<ITransacao>(`${environment.apiUrl}/transacoes/${id}`, transacao);
  }

  excluirTransacao(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/transacoes/${id}`);
  }
}
