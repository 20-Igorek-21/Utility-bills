import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndicatorsFormPersonalDataComponent } from './user-indicators-form-personal-data.component';

describe('UserIndicatorsFormPersonalDataComponent', () => {
  let component: UserIndicatorsFormPersonalDataComponent;
  let fixture: ComponentFixture<UserIndicatorsFormPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIndicatorsFormPersonalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIndicatorsFormPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
