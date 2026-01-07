import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCriarTransacaoComponent } from './editar-criar-transacao.component';

describe('EditarCriarTransacaoComponent', () => {
  let component: EditarCriarTransacaoComponent;
  let fixture: ComponentFixture<EditarCriarTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCriarTransacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCriarTransacaoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
