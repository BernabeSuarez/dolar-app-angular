import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadorTarjetaComponent } from './calculador-tarjeta.component';

describe('CalculadorTarjetaComponent', () => {
  let component: CalculadorTarjetaComponent;
  let fixture: ComponentFixture<CalculadorTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadorTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadorTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
