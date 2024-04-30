import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcecionariaComponent } from './concecionaria.component';

describe('ConcecionariaComponent', () => {
  let component: ConcecionariaComponent;
  let fixture: ComponentFixture<ConcecionariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcecionariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcecionariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
