import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeachatacheteurComponent } from './demandeachatacheteur.component';

describe('DemandeachatacheteurComponent', () => {
  let component: DemandeachatacheteurComponent;
  let fixture: ComponentFixture<DemandeachatacheteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeachatacheteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeachatacheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
