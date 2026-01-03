import { TestBed } from '@angular/core/testing';

import { ContextoStore } from './contexto-store';

describe('ContextoStore', () => {
  let service: ContextoStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextoStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
