import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoTotal } from './saldo-total';

describe('SaldoTotal', () => {
  let component: SaldoTotal;
  let fixture: ComponentFixture<SaldoTotal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaldoTotal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoTotal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
