import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesdeSHComponent } from './detallesde-sh.component';

describe('DetallesdeSHComponent', () => {
  let component: DetallesdeSHComponent;
  let fixture: ComponentFixture<DetallesdeSHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesdeSHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesdeSHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
