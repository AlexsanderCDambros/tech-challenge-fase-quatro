import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ITransacao } from '../../interfaces/transacao';

@Component({
  selector: 'app-transacao',
  imports: [
    CurrencyPipe,
    DatePipe,
    MatButtonModule
  ],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.scss',
})
export class TransacaoComponent {
  public transacao = input<ITransacao>();
}
