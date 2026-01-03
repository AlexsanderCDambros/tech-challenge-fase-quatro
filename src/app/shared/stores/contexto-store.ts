import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class ContextoStore {
  private usuario: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>({} as Usuario);

  setUsuario(usuario: Usuario) {
    this.usuario.next(usuario);
  }

  getUsuario() {
    return this.usuario.asObservable();
  }

  public efetuarLogin(user: Usuario): void {
    this.setUsuario(user);
    sessionStorage.setItem('token', btoa('UsuárioAutorizado'));
  }
}
