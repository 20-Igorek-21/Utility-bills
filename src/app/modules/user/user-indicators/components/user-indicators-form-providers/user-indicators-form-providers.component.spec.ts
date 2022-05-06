import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndicatorsFormProvidersComponent } from './user-indicators-form-providers.component';

describe('UserIndicatorsFormProvidersComponent', () => {
  let component: UserIndicatorsFormProvidersComponent;
  let fixture: ComponentFixture<UserIndicatorsFormProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIndicatorsFormProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIndicatorsFormProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
