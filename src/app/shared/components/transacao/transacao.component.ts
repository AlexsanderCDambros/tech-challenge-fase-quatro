import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ITransacao } from '../../interfaces/transacao';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { TransacoesService } from '../../services/transacoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-transacao',
  imports: [
    CurrencyPipe,
    DatePipe,
    MatButtonModule,
    RouterModule,
    MatDialogModule,
  ],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.scss',
})
export class TransacaoComponent {
  public transacao = input<ITransacao>();

  public transacaoExcluida = output<void>();

  readonly dialog = inject(MatDialog);
  private transacoesService = inject(TransacoesService);
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  public openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluirTransacao();
      }
    });
  }

  private excluirTransacao(): void {
    let idPataExcluir = this.transacao()?.id;
    if (idPataExcluir) {
      this.transacoesService.excluirTransacao(idPataExcluir).subscribe({
        next: () => {
          this.openSnackBar('Transação excluída com sucesso!', 'Fechar');
          this.transacaoExcluida.emit();
        }
      });
    }
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  template: `
    <h2 mat-dialog-title>Excluir transação</h2>
    <mat-dialog-content>
      Você tem certeza que deseja excluir esta transação?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button matButton [mat-dialog-close]="false">Não</button>
      <button matButton [mat-dialog-close]="true" cdkFocusInitial>Sim</button>
    </mat-dialog-actions>
  `,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
}
