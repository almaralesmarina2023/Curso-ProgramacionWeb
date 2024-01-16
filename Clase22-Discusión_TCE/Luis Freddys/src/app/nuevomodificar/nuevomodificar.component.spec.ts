import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevomodificarComponent } from './nuevomodificar.component';

describe('NuevomodificarComponent', () => {
  let component: NuevomodificarComponent;
  let fixture: ComponentFixture<NuevomodificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevomodificarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevomodificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
