import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDolarComponent } from './conversor-dolar.component';

describe('ConversorDolarComponent', () => {
  let component: ConversorDolarComponent;
  let fixture: ComponentFixture<ConversorDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorDolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
