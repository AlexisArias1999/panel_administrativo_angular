import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthContentPageComponent } from './auth-content-page.component';

describe('AuthContentPageComponent', () => {
  let component: AuthContentPageComponent;
  let fixture: ComponentFixture<AuthContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthContentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
