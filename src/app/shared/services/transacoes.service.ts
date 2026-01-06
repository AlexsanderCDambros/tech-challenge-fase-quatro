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

  buscarTransacoesPorUsuario(idUsuario: string): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${environment.apiUrl}/transacoes?userId=${idUsuario}`);
  }

  buscarSaldoTotalPorUsuario(idUsuario: string): Observable<number> {
    return this.http.get<Transacao[]>(`${environment.apiUrl}/transacoes?userId=${idUsuario}`)
      .pipe(
        map(transacoes => transacoes.reduce((total, t) => total + t.valor, 0))
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
