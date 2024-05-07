import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageVehiculosComponent } from './page-vehiculos.component';

describe('PageVehiculosComponent', () => {
  let component: PageVehiculosComponent;
  let fixture: ComponentFixture<PageVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageVehiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
