import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileFormPageViewComponent } from './user-profile-form-page-view.component';

describe('UserProfileFormPageViewComponent', () => {
  let component: UserProfileFormPageViewComponent;
  let fixture: ComponentFixture<UserProfileFormPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileFormPageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileFormPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
