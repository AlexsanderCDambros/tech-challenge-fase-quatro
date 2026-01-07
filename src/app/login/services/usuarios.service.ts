import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../../shared/interfaces/usuario';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) {}

  public buscarUsuario(usr: string, pwd: string): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${environment.apiUrl}/usuarios?usuario=${usr}&senha=${pwd}`);
  }

  public criarUsuario(usr: string, pwd: string): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${environment.apiUrl}/usuarios`, { usuario: usr, senha: pwd });
  }
}
