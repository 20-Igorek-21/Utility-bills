import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndicatorsAccountComponent } from './user-indicators-account.component';

describe('UserIndicatorsAccountComponent', () => {
  let component: UserIndicatorsAccountComponent;
  let fixture: ComponentFixture<UserIndicatorsAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIndicatorsAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIndicatorsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
