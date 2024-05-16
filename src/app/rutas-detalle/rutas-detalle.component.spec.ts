import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasDetalleComponent } from './rutas-detalle.component';

describe('RutasDetalleComponent', () => {
  let component: RutasDetalleComponent;
  let fixture: ComponentFixture<RutasDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutasDetalleComponent]
    });
    fixture = TestBed.createComponent(RutasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
