import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEmpresarialFormPageComponent } from './grupo-empresarial-form-page.component';

describe('GrupoEmpresarialFormPageComponent', () => {
  let component: GrupoEmpresarialFormPageComponent;
  let fixture: ComponentFixture<GrupoEmpresarialFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrupoEmpresarialFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupoEmpresarialFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
