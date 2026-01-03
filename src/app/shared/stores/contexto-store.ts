import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class ContextoStore {
  private usuario: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>({} as Usuario);

  public setUsuario(usuario: Usuario) {
    this.usuario.next(usuario);
  }

  public getUsuario$() {
    return this.usuario.asObservable();
  }

  public getUsuario() {
    return this.usuario.getValue();
  }

  public efetuarLogin(user: Usuario): void {
    this.setUsuario(user);
    sessionStorage.setItem('token', btoa(JSON.stringify(user)));
  }

  public efetuarLogout(): void {
    this.setUsuario({} as Usuario);
    sessionStorage.removeItem('token');
  }
}
