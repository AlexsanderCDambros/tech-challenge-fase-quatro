import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.scss',
  standalone: false
})
export class Cadastrar {

  public form: FormGroup;

  public carregando = signal(false);
  public erro = signal('');

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
  }

  public cadastrar() {
    this.carregando.set(true);
    this.erro.set('');

    if (this.form.get('senha')?.value !== this.form.get('confirmarSenha')?.value) {
      this.erro.set('As senhas não coincidem.');
      this.carregando.set(false);
      return;
    }

    this.usuariosService.criarUsuario(
      this.form.get('usuario')?.value,
      this.form.get('senha')?.value
    ).subscribe({
      next: () => {
        this.carregando.set(false);
        this.router.navigate(['/login']);
      },
      error: () => {
        this.erro.set('Erro ao cadastrar usuário.');
        this.carregando.set(false);
      }
    });
  }
}
