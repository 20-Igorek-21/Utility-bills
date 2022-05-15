import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutPageHeaderNavigationUserComponent } from './main-layout-page-header-navigation-user.component';

describe('MainLayoutPageHeaderNavigationUsersComponent', () => {
    let component: MainLayoutPageHeaderNavigationUserComponent;
    let fixture: ComponentFixture<MainLayoutPageHeaderNavigationUserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ MainLayoutPageHeaderNavigationUserComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MainLayoutPageHeaderNavigationUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
