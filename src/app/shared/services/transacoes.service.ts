import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransacoesService {
  constructor(
    private http: HttpClient
  ) {}

  buscarTransacoesPorUsuario(idUsuario: string, pagina?: number, porPagina?: number): Observable<{data: Transacao[], pages :number}> {
    let url = `${environment.apiUrl}/transacoes?userId=${idUsuario}`;
    if (pagina !== undefined && porPagina !== undefined) {
      url += `&_page=${pagina}&_per_page=${porPagina}`;
    }
    return this.http.get<{data: Transacao[], pages :number}>(url);
  }

  buscarSaldoTotalPorUsuario(idUsuario: string): Observable<number> {
    return this.http.get<Transacao[]>(`${environment.apiUrl}/transacoes?userId=${idUsuario}`)
      .pipe(
        map(transacoes => transacoes.reduce((total, t) =>
          total + (t.tipo === 'Receita' ? t.valor : (t.tipo === 'Despesa' ? -t.valor : 0))
        , 0))
      );
  }

  criarTransacao(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(`${environment.apiUrl}/transacoes`, transacao);
  }

  editarTransacao(id: string, transacao: Partial<Transacao>): Observable<Transacao> {
    return this.http.patch<Transacao>(`${environment.apiUrl}/transacoes/${id}`, transacao);
  }

  excluirTransacao(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/transacoes/${id}`);
  }
}
