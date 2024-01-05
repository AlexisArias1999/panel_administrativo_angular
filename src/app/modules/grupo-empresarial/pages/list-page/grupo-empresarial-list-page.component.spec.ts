import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEmpresarialListPageComponent } from './grupo-empresarial-list-page.component';

describe('GrupoEmpresarialListPageComponent', () => {
  let component: GrupoEmpresarialListPageComponent;
  let fixture: ComponentFixture<GrupoEmpresarialListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrupoEmpresarialListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupoEmpresarialListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
