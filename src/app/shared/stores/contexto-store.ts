import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContextoStore {
  private idUsuario: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setIdUsuario(id: string) {
    this.idUsuario.next(id);
  }

  getIdUsuario() {
    return this.idUsuario.asObservable();
  }
}
