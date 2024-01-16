import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSuperHeroeComponent } from './modificar-super-heroe.component';

describe('ModificarSuperHeroeComponent', () => {
  let component: ModificarSuperHeroeComponent;
  let fixture: ComponentFixture<ModificarSuperHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarSuperHeroeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarSuperHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
