import { Component } from '@angular/core';
import { ContextoStore } from '../../shared/stores/contexto-store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    AsyncPipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(
    public contextoStore: ContextoStore
  ) {}
}
