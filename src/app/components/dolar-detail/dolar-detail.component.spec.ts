import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarDetailComponent } from './dolar-detail.component';

describe('DolarDetailComponent', () => {
  let component: DolarDetailComponent;
  let fixture: ComponentFixture<DolarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolarDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
