import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutPageHeaderNavigationDashboardComponent } from './main-layout-page-header-navigation-dashboard.component';

describe('MainLayoutPageHeaderNavigationDashboardComponent', () => {
  let component: MainLayoutPageHeaderNavigationDashboardComponent;
  let fixture: ComponentFixture<MainLayoutPageHeaderNavigationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayoutPageHeaderNavigationDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutPageHeaderNavigationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
