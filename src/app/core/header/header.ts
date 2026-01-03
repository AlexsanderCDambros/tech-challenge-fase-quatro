import { Component } from '@angular/core';
import { ContextoStore } from '../../shared/stores/contexto-store';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    AsyncPipe,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(
    public contextoStore: ContextoStore,
    public router: Router
  ) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
