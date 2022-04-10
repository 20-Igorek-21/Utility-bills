import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRegisterFormPageComponent } from './auth-register-form-page.component';

describe('AuthRegisterFormPageComponent', () => {
  let component: AuthRegisterFormPageComponent;
  let fixture: ComponentFixture<AuthRegisterFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthRegisterFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRegisterFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
