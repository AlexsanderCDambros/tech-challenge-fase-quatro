import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-transacao',
  imports: [
    CurrencyPipe,
    DatePipe,
    MatButtonModule
  ],
  templateUrl: './transacao.html',
  styleUrl: './transacao.scss',
})
export class TransacaoComponent {
  public transacao = input<Transacao>();
}
