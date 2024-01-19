import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHeroeComponent } from './formulario-heroe.component';

describe('FormularioHeroeComponent', () => {
  let component: FormularioHeroeComponent;
  let fixture: ComponentFixture<FormularioHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioHeroeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
