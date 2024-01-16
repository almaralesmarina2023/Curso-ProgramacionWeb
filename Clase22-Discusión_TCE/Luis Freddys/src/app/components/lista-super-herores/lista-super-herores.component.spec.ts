import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSuperHeroresComponent } from './lista-super-herores.component';

describe('ListaSuperHeroresComponent', () => {
  let component: ListaSuperHeroresComponent;
  let fixture: ComponentFixture<ListaSuperHeroresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaSuperHeroresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaSuperHeroresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
