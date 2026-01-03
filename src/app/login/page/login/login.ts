import { Component, signal } from '@angular/core';
import { UsuariosService } from '../../services/usuarios';
import { ContextoStore } from '../../../shared/stores/contexto-store';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: false,
})
export class Login {

  public form: FormGroup;

  public carregando = signal(false);
  public erro = signal('');

  constructor(
    private usuariosService: UsuariosService,
    private contextoStore: ContextoStore,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  public autenticar() {
    this.carregando.set(true);
    this.erro.set('');

    this.usuariosService.buscarUsuario(this.form.get('usuario')?.value, this.form.get('senha')?.value).subscribe((user) => {
      if ((!user || user.length === 0) || user[0].senha !== this.form.get('senha')?.value) {
        this.erro.set('Usuário ou senha inválidos.');
        this.carregando.set(false);
        return;
      }
      this.contextoStore.setIdUsuario(user[0].id);
      sessionStorage.setItem('token', btoa(user[0].toString()));
      this.erro.set('');
      this.carregando.set(false);
      this.router.navigate(['/inicio']);
    });
  }

  public cadastrar() {
    console.log('cadastrar');

    this.router.navigate(['/login/cadastrar']);
  }
}
