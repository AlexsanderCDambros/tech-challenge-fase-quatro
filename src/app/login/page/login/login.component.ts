import { Component, signal } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContextoStore } from '../../../shared/stores/contexto-store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent {

  public form: FormGroup;

  public carregando = signal(false);
  public erro = signal('');

  constructor(
    private usuariosService: UsuariosService,
    private contextoStore: ContextoStore,
    private router: Router,
    private fb: FormBuilder,
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
      this.contextoStore.efetuarLogin(user[0]);
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
