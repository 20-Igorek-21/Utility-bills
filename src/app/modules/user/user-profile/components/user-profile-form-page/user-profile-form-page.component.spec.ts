import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileFormPageComponent } from './user-profile-form-page.component';

describe('UserProfileFormPageComponent', () => {
  let component: UserProfileFormPageComponent;
  let fixture: ComponentFixture<UserProfileFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
