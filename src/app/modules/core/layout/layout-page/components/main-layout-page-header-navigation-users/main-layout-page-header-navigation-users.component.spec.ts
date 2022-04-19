import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutPageHeaderNavigationUsersComponent } from './main-layout-page-header-navigation-users.component';

describe('MainLayoutPageHeaderNavigationUsersComponent', () => {
  let component: MainLayoutPageHeaderNavigationUsersComponent;
  let fixture: ComponentFixture<MainLayoutPageHeaderNavigationUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayoutPageHeaderNavigationUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutPageHeaderNavigationUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
