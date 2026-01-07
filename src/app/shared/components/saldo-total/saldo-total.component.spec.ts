import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoTotalComponent } from './saldo-total.component';

describe('SaldoTotal', () => {
  let component: SaldoTotalComponent;
  let fixture: ComponentFixture<SaldoTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaldoTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoTotalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
