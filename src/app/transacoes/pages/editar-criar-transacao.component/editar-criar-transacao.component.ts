import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TransacoesService } from '../../../shared/services/transacoes.service';
import { ITransacao } from '../../../shared/interfaces/transacao';
import { ContextoStore } from '../../../shared/stores/contexto-store';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-criar-transacao',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './editar-criar-transacao.component.html',
  styleUrls: ['./editar-criar-transacao.component.scss'],
})
export class EditarCriarTransacaoComponent implements OnInit {
  public idTransacao = signal<string>('');

  public form: FormGroup;

  displayAmount = 'R$ 0,00';
  private _snackBar = inject(MatSnackBar);

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private transacoesService: TransacoesService,
    private contextoStore: ContextoStore,
  ) {
    this.form = this.fb.group({
      tipo: ['Receita', Validators.required],
      metodo: ['Cartão de crédito', Validators.required],
      descricao: ['', Validators.required],
      valor: [0.00, Validators.required],
      data: [null, Validators.required],
    });
    this.route.paramMap.subscribe(params => {
      this.idTransacao.set(params.get('id') || '');
    });
  }

  ngOnInit() {
    if (this.idTransacao()) {
      this.transacoesService.buscarTransacaoPorId(this.idTransacao()).subscribe({
        next: (transacao: ITransacao) => {
          this.form.patchValue({
            tipo: transacao.tipo,
            metodo: transacao.metodo,
            descricao: transacao.descricao,
            valor: transacao.valor,
            data: new Date(transacao.data),
          });
          const formatted = transacao.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          this.displayAmount = 'R$ ' + formatted;
        },
        error: (error) => {
          this.openSnackBar('Erro ao carregar transação. Tente novamente. ' + error, 'Fechar');
          this.router.navigate(['/transacoes']);
        }
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  aoEditarValor(evento: Event) {
    const input = evento.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '');
    if (!digits) {
      this.displayAmount = '';
      this.form.get('valor')?.setValue(null, { emitEvent: false });
      return;
    }
    const value = parseInt(digits, 10);
    const formatted = (value / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    this.displayAmount = 'R$ ' + formatted;
    input.value = this.displayAmount;
    this.form.get('valor')?.setValue(value / 100, { emitEvent: false });
  }

  aoCancelar() {
    this.router.navigate(['/transacoes']);
  }

  aoSalvar() {
    if (this.form.valid) {
      const dadosTransacao: ITransacao = {
        tipo: this.form.value.tipo,
        metodo: this.form.value.metodo,
        descricao: this.form.value.descricao,
        valor: this.form.value.valor,
        data: this.form.value.data,
        userId: this.contextoStore.getUsuario().id,
      };

      if (this.idTransacao()) {
        this.transacoesService.editarTransacao(this.idTransacao(), dadosTransacao).subscribe({
          next: () => {
            this.openSnackBar('Transação atualizada com sucesso!', 'Fechar');
            this.router.navigate(['/transacoes']);
          },
          error: (error) => {
            this.openSnackBar('Erro ao atualizar transação. Tente novamente. ' + error, 'Fechar');
          }
        });
        return;
      }

      this.transacoesService.criarTransacao(dadosTransacao).subscribe({
        next: () => {
          this.openSnackBar('Transação criada com sucesso!', 'Fechar');
          this.router.navigate(['/transacoes']);
        },
        error: (error) => {
          this.openSnackBar('Erro ao criar transação. Tente novamente. ' + error, 'Fechar');
        }
      });
    }
  }
}
