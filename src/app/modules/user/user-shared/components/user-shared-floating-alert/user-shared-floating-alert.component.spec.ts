import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSharedFloatingAlertComponent } from './user-shared-floating-alert.component';

describe('UserSharedFloatingAlertComponent', () => {
  let component: UserSharedFloatingAlertComponent;
  let fixture: ComponentFixture<UserSharedFloatingAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSharedFloatingAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSharedFloatingAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
