import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndicatorsSectionAccountComponent } from './user-indicators-section-account.component';

describe('UserIndicatorsSectionAccountComponent', () => {
  let component: UserIndicatorsSectionAccountComponent;
  let fixture: ComponentFixture<UserIndicatorsSectionAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIndicatorsSectionAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIndicatorsSectionAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
