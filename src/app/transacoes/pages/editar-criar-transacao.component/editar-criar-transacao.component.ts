import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-editar-criar-transacao.component',
  imports: [],
  templateUrl: './editar-criar-transacao.component.html',
  styleUrl: './editar-criar-transacao.component.scss',
})
export class EditarCriarTransacaoComponent {
  public transactionId = signal<string>('');

  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe(params => {
      this.transactionId.set(params.get('id') || '');
    });
  }
}
