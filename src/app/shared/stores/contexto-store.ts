import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class ContextoStore {
  private usuario: BehaviorSubject<IUsuario> = new BehaviorSubject<IUsuario>({} as IUsuario);

  public setUsuario(usuario: IUsuario) {
    this.usuario.next(usuario);
  }

  public getUsuario$() {
    return this.usuario.asObservable();
  }

  public getUsuario() {
    return this.usuario.getValue();
  }

  public efetuarLogin(user: IUsuario): void {
    this.setUsuario(user);
    sessionStorage.setItem('token', btoa(JSON.stringify(user)));
  }

  public efetuarLogout(): void {
    this.setUsuario({} as IUsuario);
    sessionStorage.removeItem('token');
  }
}
