import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { ContextoStore } from '../../../shared/stores/contexto-store';

@Component({
  selector: 'app-header',
  imports: [
    AsyncPipe,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor(
    public contextoStore: ContextoStore,
    public router: Router
  ) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
