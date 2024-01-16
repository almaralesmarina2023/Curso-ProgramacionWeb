import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperHeroeComponent } from './add-super-heroe.component';

describe('AddSuperHeroeComponent', () => {
  let component: AddSuperHeroeComponent;
  let fixture: ComponentFixture<AddSuperHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSuperHeroeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSuperHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
