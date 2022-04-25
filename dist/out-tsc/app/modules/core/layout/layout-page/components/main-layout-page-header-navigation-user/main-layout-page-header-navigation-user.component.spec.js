import { TestBed } from '@angular/core/testing';
import { MainLayoutPageHeaderNavigationUserComponent } from './main-layout-page-header-navigation-user.component';
describe('MainLayoutPageHeaderNavigationUsersComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MainLayoutPageHeaderNavigationUserComponent]
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
//# sourceMappingURL=main-layout-page-header-navigation-user.component.spec.js.map